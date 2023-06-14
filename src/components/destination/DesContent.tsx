import H1 from "@/utils/H1";

const DesContent = ({ content, title }: { content: string; title: string }) => {
  return (
    <div className="my-3 gap-4 flex flex-col w-full justify-center desktop:items-center desktop:my-16">
      <h1 className="text-white text-center text-6xl tablet:text-8xl font-bold my-5 desktop:text-6xl">
        {title}
      </h1>
      <p className="text-p-purple text-sm tablet:text-2xl tablet:text-center tablet:px-36 desktop:text-base desktop:px-3">
        {content}
      </p>
    </div>
  );
};

export default DesContent;
