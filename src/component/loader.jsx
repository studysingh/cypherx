import styles from "./loader.module.css";
const Loader = () => {
  return (
    <div className={styles.loader}>
      <div
        className={`spinner-border ${styles.loaderIcon}`}
        role="status"
      ></div>{" "}
      <div className={styles.loaderText}>loading ...</div>
    </div>
  );
};
export default Loader;
