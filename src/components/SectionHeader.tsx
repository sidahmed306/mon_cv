type Props = {
  command: string;
  title: string;
  index: string;
};

export function SectionHeader({ command, title, index }: Props) {
  return (
    <div className="mb-10">
      <div className="text-terminal-comment text-sm mb-2">
        <span className="text-terminal-green">$</span> {command}
      </div>
      <h2 className="text-3xl sm:text-4xl font-bold flex items-center gap-3 flex-wrap">
        <span className="text-terminal-purple text-xl">{index}.</span>
        <span className="text-terminal-heading">{title}</span>
        <span className="flex-1 h-px bg-gradient-to-r from-terminal-border to-transparent ml-2 min-w-[60px]" />
      </h2>
    </div>
  );
}
