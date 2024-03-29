import { useQuery, useQueryClient } from "react-query";

export const Sample = () => {
  const f = useQuery("sample", async () => {
    return Promise.resolve({
      txt: "Hello World",
    });
  });

  const client = useQueryClient();

  const s = client.getQueryData("sample");
  if (s) {
    console.log(s);
  }
  client.setQueryData("sample", { txt: "Hello World" });

  return (
    <div>
      <h1>Sample</h1>
      {f.isLoading && <div>Loading...</div>}
      {f.isError && <div>Error</div>}
      {f.data && <div>{f.data.txt}</div>}
    </div>
  );
};
