const links = [
  {
    url: "https://www.github.com/sultanMachido",
    name: "Github",
  },
  {
    url: "https://www.linkedin.com/in/opeoluwa-adesina-725b8a10b/",
    name: "LinkedIn",
  },
  {
    url: "mailto:opehardesina@gmail.com",
    name: "Email",
  },
];

const ContactLinks = () => {
  return (
    <section className="flex justify-center">
      {links.map((link) => (
        <a className="px-[10px]" href={link.url} key={1}>
          {link.name}
        </a>
      ))}
    </section>
  );
};

export default ContactLinks;
