import { HttpResponse, http } from "msw";
import { z } from "zod";

const BASE_URL = "http://localhost:5173";

export const withBaseUrl = (url: string) => {
  return `${BASE_URL}${url}`;
};

const UserSchema = z.object({
  email: z.string(),
  password: z.string(),
});

type User = z.infer<typeof UserSchema>;

const defaultUser: User = {
  email: "admin@example.com",
  password: "password",
};

let users: User[] = [defaultUser];

export const resetServerData = () => {
  users = [defaultUser];
};

const createUser = http.post(
  withBaseUrl("/user"),
  async ({ request }): Promise<HttpResponse> => {
    const body = await request.json();
    const data = UserSchema.safeParse(body);
    if (!data.success) {
      return HttpResponse.json({ error: "Invalid request" }, { status: 400 });
    }
    if (users.find((user) => user.email === data.data.email)) {
      return HttpResponse.json(
        { error: "User already exists" },
        { status: 400 },
      );
    }
    users.push(data.data);
    return HttpResponse.json({ username: data.data.email });
  },
);

const login = http.post(
  withBaseUrl("/login"),
  async ({ request }): Promise<HttpResponse> => {
    const body = await request.json();
    const data = UserSchema.safeParse(body);
    if (!data.success) {
      return HttpResponse.json({ error: "Invalid request" }, { status: 400 });
    }
    const user = users.find((user) => user.email === data.data.email);
    if (!user || user.password !== data.data.password) {
      return HttpResponse.json(
        { error: "Invalid credentials" },
        { status: 400 },
      );
    }
    return HttpResponse.json({ username: data.data.email });
  },
);

export const handlers = [
  http.get(withBaseUrl("/user"), () => {
    return HttpResponse.json({ username: "admin" });
  }),
  createUser,
  login,
  http.all(withBaseUrl("/*"), (req) => {
    return HttpResponse.json(
      {
        error: "Not found",
        message: `Cannot ${req.request.method} ${req.request.url}`,
      },
      { status: 404 },
    );
  }),
];
