import { useState, useEffect } from "react";

const quotes = [
  "Der größte Ruhm im Leben liegt nicht im Fallen, sondern im Aufstehen, wenn wir fallen.",
  "Der Weg zum Erfolg ist, mit dem Reden aufzuhören und mit dem Tun zu beginnen.",
  "Ihre Zeit ist begrenzt, also verschwenden Sie sie nicht mit den Fehlern anderer. Lassen Sie sich nicht von einem Dogma einfangen - das bedeutet, mit den Ergebnissen des Denkens anderer Menschen zu leben.",
  "Wenn das Leben vorhersehbar wäre, würde es aufhören, Leben zu sein, und wäre ohne Geschmack.",
  "Wenn Sie auf das schauen, was Sie im Leben haben, werden Sie immer mehr haben. Wenn Sie auf das schauen, was Sie im Leben nicht haben, werden Sie nie genug haben.",
  "Wenn Sie Ihre Ziele lächerlich hoch ansetzen und damit scheitern, werden Sie vor dem Erfolg aller anderen scheitern.",
  "Das Leben ist das, was passiert, wenn man damit beschäftigt ist, andere Pläne zu machen.",
  "Verbreiten Sie Liebe, wo immer Sie hingehen. Lassen Sie niemanden zu Ihnen kommen, ohne glücklicher zu sein.",
  "Wenn Sie das Ende Ihres Seils erreichen, machen Sie einen Knoten hinein und halten Sie sich fest.",
  "Denken Sie immer daran, dass Sie absolut einzigartig sind. Genau wie jeder andere auch.",
  "Beurteilen Sie jeden Tag nicht nach der Ernte, die Sie einfahren, sondern nach den Samen, die Sie säen.",
  "Die Zukunft gehört denjenigen, die an die Schönheit ihrer Träume glauben.",
  "Verbreiten Sie Liebe, wo immer Sie hingehen. Lass niemanden zu dir kommen, ohne glücklicher zu sein.",
  "Wenn Sie das Ende Ihres Seils erreichen, machen Sie einen Knoten und halten Sie sich fest.",
  "Denken Sie immer daran, dass Sie absolut einzigartig sind. Genau wie jeder andere auch.",
  "Beurteilen Sie jeden Tag nicht nach der Ernte, die Sie einfahren, sondern nach den Samen, die Sie säen.",
  "Letztendlich sind es nicht die Jahre in Ihrem Leben, die zählen. Es ist das Leben in Ihren Jahren.",
  "Viele der Misserfolge im Leben sind Menschen, die nicht erkannten, wie nahe sie dem Erfolg waren, als sie aufgaben.",
  "Sie haben Köpfchen in Ihrem Kopf. Sie haben Füße in Ihren Schuhen. Sie können sich in jede Richtung lenken, die Sie wählen.",
  "Das Leben ist nie fair, und vielleicht ist es für die meisten von uns gut, dass es das nicht ist.",
  "Der Zweck unseres Lebens ist es, glücklich zu sein.",
  "Man darf jetzt nicht alles so schlechtreden, wie es war.",
  "Wir dürfen jetzt nur nicht den Sand in den Kopf stecken.",
  "Jetzt müssen wir die Köpfe hochkrempeln. Und die Ärmel natürlich auch.",
  "Für weniger als 10.000 Dollar am Tag stehen wir gar nicht erst auf!",
  "Phantasie ist wichtiger als Wissen, denn Wissen ist begrenzt.",
  "Zuerst ignorieren sie dich, dann lachen sie über dich, dann bekämpfen sie dich und dann gewinnst du.",
  "Es liegt nicht so viel daran, wie wir es um uns haben, sondern wie wir es in uns haben, darauf kommt es an.",
  "Sie können alle Blumen abschneiden, den Frühling aber können sie nicht aufhalten.",
  "Wenn ich einmal nicht mehr bin, werden euch die Imperialisten ersäufen wie einen Wurf junger Katzen.",
  "Auf einer geteerten Strasse kann man den richtigen Weg nicht finden.",
];

const authors = [
  "Nelson Mandela",
  "Walt Disney",
  "Steve Jobs",
  "Eleanor Roosevelt",
  "Oprah Winfrey",
  "James Cameron",
  "John Lennon",
  "Mutter Teresa",
  "Franklin D. Roosevelt",
  "Magaret Mead",
  "Robert Louis Stevenson",
  "Abraham Lincoln",
  "Thomas A. Edison",
  "Dr. Seuss",
  "Oscar Wilde",
  "Dalai Lama",
  "Fredi Bobic",
  "Lothar Mathäus",
  "Lukas Podolski",
  "Linda Evangelista",
  "Albert Einstein",
  "Mahatma Gandhi",
  "Hans Christian Andersen",
  "Che Guevara",
  "Josef Stalin",
  "Bob Marley",
];

const Quotes = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const getRandomQuote = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    const randomAuthor = authors[Math.floor(Math.random() * authors.length)];
    setQuote(randomQuote);
    setAuthor(randomAuthor);
  };

  useEffect(() => {
    getRandomQuote(); // Initial quote on mount
    const intervalId = setInterval(getRandomQuote, 15000); // Update every 15 seconds

    return () => clearInterval(intervalId); // Cleanup interval on unmount
  }, []); // Empty dependency array ensures this runs only once on mount and cleans up on unmount

  return (
    <div className="flex flex-col items-center mt-32 text-white text-2xl p-4">
      <p id="quote-text">"{quote}"</p>
      <p id="quote-author">{author}</p>
    </div>
  );
};

export default Quotes;
