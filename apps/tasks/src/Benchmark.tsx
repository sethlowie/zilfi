import { useReadValue } from "@zilfi/react";
import { useEffect } from "react";
import { useControllers } from "~/hooks";

const BenchNode = ({ id }: { id: string }) => {
  const ctrls = useControllers();
  const node = useReadValue(ctrls.benchmark.getNode(id));

  return (
    <div>
      <p>
        {node.name}: {node.on ? "On" : "Off"}
      </p>
    </div>
  );
};

export const Benchmark = () => {
  const ctrls = useControllers();

  const ids = useReadValue(ctrls.benchmark.getNodeIds());

  useEffect(() => {
    ctrls.benchmark.runBenchmark(200);
  }, []);

  return (
    <div className="">
      <h1>Benchmark</h1>
      <p>Node count: {ids.length}</p>
      <div className="grid grid-cols-10 gap-1">
        {ids.map((id) => {
          return <BenchNode key={id} id={id} />;
        })}
      </div>
    </div>
  );
};
