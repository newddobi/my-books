import styles from "./Layout.module.css";

type LayoutProps = {
  children: React.ReactNode; // 👈️ added type for children
};

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <div className={styles.layout}>{children}</div>
);

export default Layout;
