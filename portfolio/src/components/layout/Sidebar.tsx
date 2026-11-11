import { navigation } from "../../data/navigation";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
  if (!isOpen) return null;

  return (
    <aside className="fixed inset-y-0 right-0 z-50 w-72 border-l border-slate-200 bg-white p-6 shadow-2xl dark:border-slate-800 dark:bg-slate-950">
      <ul className="space-y-3">
        {navigation.map((item) => (
          <li key={item.id}>
            <a
              href={item.path}
              onClick={onClose}
              className="block rounded-xl px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;

