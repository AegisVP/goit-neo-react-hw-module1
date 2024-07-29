import css from './Section.module.css';
// import { SectionWrapper, SectionTitle } from "./Section.styled";

const Section = ({ title, children }) => (
  <section className={css.wrapper}>
    {title && <h2 className={css.title}>{title}</h2>}
    {children}
  </section>
);

export default Section;
