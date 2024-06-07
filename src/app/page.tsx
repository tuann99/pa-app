import styles from './page.module.css';
import analysis from './page.module.js';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.h1}>PurpleAir Data Processing</h1>
        <p className={styles.text}>Webapp for processing PurpleAir data. Built by Tuan Nguyen at the Exposure Science Lab, 2024</p>
      </div>
      <div className={styles.container}>
        <h2 className={styles.h2}>Instructions</h2>
        <ol className={styles.text} type="1">
          <li>Upload a file</li>
          <li>Press submit</li>
          <li>Export the formatted data</li>
        </ol>
      </div>
      <div className={styles.container}>
        <input className={styles.fileInput} type="file" />
      </div>  
      <div id="dataDashboard" className={styles.dataDashboard}>
        <table>
          <caption>PA Stats</caption>
          <tbody>
            <tr><th>Summary Stats</th><th>ug/m3</th></tr>
            <tr><td>mean</td><td>2</td></tr>
            <tr><td>med</td><td>2</td></tr>
            <tr><td>stdev</td><td>2</td></tr>
            <tr><td>min</td><td>2</td></tr>
            <tr><td>max</td><td>2</td></tr>
          </tbody>
        </table>
      </div>
    </main>
  );
}
