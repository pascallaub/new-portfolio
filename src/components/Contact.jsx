const Contact = () => {
  return (
    <section id="contact" className="p-8 text-white">
      <h2 className="text-3xl font-bold mb-4 text-center">Kontakt</h2>
      <ul>
        <li className="mb-2 text-xl text-center">
          <strong>Email: </strong>
          <a href="mailto:pascal@pascallaub.de" className="hover:underline">
            pascal@pascallaub.de
          </a>
        </li>
        <li className="mb-2 text-xl text-center">
          <strong>Homepage: </strong>
          <a
            href="https://pascallaub.de"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Meine Webseite
          </a>
        </li>
      </ul>
    </section>
  );
};

export default Contact;
