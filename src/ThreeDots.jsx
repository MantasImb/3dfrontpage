const ThreeDots = ({ text = 'Loading' }) => (
  <div className="inline-flex items-center text-2xl">
    <span>{text}</span>
    <span className="dot animate-blink animate-delay-0">.</span>
    <span className="dot animate-blink animate-delay-500">.</span>
    <span className="dot animate-blink animate-delay-1000">.</span>
  </div>
);

export default ThreeDots;
