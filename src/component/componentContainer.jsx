import styles from "./componentContainer.module.css";

import GroupWiseContainer from "./groupwiseContainer";
const ComponentContainer = () => {
  return (
    <main>
      <section className={styles.componentContainer}>
        <GroupWiseContainer />;
      </section>
    </main>
  );
};
export default ComponentContainer;
