import useEmblaCarousel from "embla-carousel-react";
import { useCallback, Children } from "react";

export default function Carousel({ children }) {
  const [emblaRef, emblaAPI] = useEmblaCarousel();

  const mappedChildren = Children.map(children, (child) => {
    return <div className="embla_slide">{child}</div>;
  });

  const scrollNext = useCallback(() => {
    if (emblaAPI) emblaAPI.scrollNext();
  }, [emblaAPI]);

  const scrollPrev = useCallback(() => {
    if (emblaAPI) emblaAPI.scrollPrev();
  }, [emblaAPI]);

  return (
    <div className="embla_wrapper">
      <div className="embla" ref={emblaRef}>
        <div className="embla_container">{mappedChildren}</div>
      </div>

      <button className="embla_btn embla_btn_prev" onClick={scrollPrev}>
        ‹
      </button>
      <button className="embla_btn embla_btn_next" onClick={scrollNext}>
        ›
      </button>
    </div>
  );
}
