const links = [
  {
    url: "https://wa.me/message/UPXLYJCJUNVYH1",
    name: "Whatsapp",
  },
  {
    url: "https://www.linkedin.com/in/omoyosola-odukoya-/",
    name: "LinkedIn",
  },
  {
    url: "mailto:yosolaoduks@gmail.com",
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
