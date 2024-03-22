import { Atom, createAtom } from "@zilfi/core";
import { useReadValue } from "@zilfi/react";

type TabProps = {
  label: string;
  onClick: (label: string) => void;
  active: boolean;
  activeTab: Atom<string>;
};

type TabsProps = {
  activeTab: Atom<string>;
  tabs: TabProps[];
};

const Tab = ({ label, onClick, activeTab }: TabProps) => {
  const active = useReadValue(activeTab);
  const handleClick = () => {
    activeTab.set(label);
    onClick(label);
  };
  return (
    <button
      onClick={handleClick}
      className={`tab ${active === label ? "active" : ""}`}
    >
      {label}
    </button>
  );
};

export const Tabs: React.FC<TabsProps> = ({ tabs }) => {
  return (
    <div>
      {tabs.map((tab, index) => (
        <Tab key={index} {...tab} />
      ))}
    </div>
  );
};

const Content = ({ activeTab }: { activeTab: Atom<string> }) => {
  const active = useReadValue(activeTab);

  switch (active) {
    case "Tab 1":
      return <div>Tab 1 content</div>;
    case "Tab 2":
      return <div>Tab 2 content</div>;
    default:
      return null;
  }
};

export const Foo = () => {
  const activeTab = createAtom("Tab 1");

  const tabs = [
    {
      label: "Tab 1",
      onClick: (label: string) => console.log(label),
      active: true,
      activeTab,
    },
    {
      label: "Tab 2",
      onClick: (label: string) => console.log(label),
      active: false,
      activeTab,
    },
  ];

  return (
    <div>
      <Tabs tabs={tabs} activeTab={activeTab} />;
      <Content activeTab={activeTab} />
    </div>
  );
};
