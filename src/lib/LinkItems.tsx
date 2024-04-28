import Link from "next/link";

const linkItems = [
  {
    href: "https://github.com/gijs-ve/mindmingle-royal-challenge",
    text: "Source",
  },
  {
    href: "https://www.mindmingle.nl",
    text: "Mind Mingle",
  },
  {
    href: "/lowe",
    text: "Credits",
  },
];
export const LinkItems = () => {
  return (
    <div className="absolute bottom-0 flex w-full justify-center gap-4 p-2 text-center">
      {linkItems.map(({ ...props }, index) => {
        return <LinkItem {...props} key={index} />;
      })}
    </div>
  );
};
const LinkItem = ({ href, text }: { href: string; text: string }) => {
  return (
    <Link
      className="rounded-full border-2 bg-gray-800 p-4 hover:bg-gray-700"
      href={href}
    >
      {text}
    </Link>
  );
};
