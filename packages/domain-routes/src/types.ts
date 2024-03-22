type HomeRoute = {
  page: "Home";
};

type LoginRoute = {
  page: "Login";
};

type BenchmarkRoute = {
  page: "Benchmark";
};

export type Route = HomeRoute | LoginRoute | BenchmarkRoute;
