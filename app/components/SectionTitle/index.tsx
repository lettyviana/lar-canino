import styles from "./section-title.module.scss";

export const SectionTitle = ({ children }: { children: string }) => {
  return <h2 className={styles["section-title"]}>{children}</h2>;
};
