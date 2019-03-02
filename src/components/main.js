import React from "react"
import styles from "./main.module.css"

export default () => (
  <div className={styles.main}>
    <p className={styles.indent}><em><strong>Currently</strong></em>, I'm helping <a href="https://www.redventures.com/" target="_blank">Red Ventures</a> prototype, build and deploy cart checkout systems and marketing assets for their partners.</p>
    <p className={styles.indent}>
      <em><strong>Recently</strong></em>, I've helped build a checkout and credit check system that has been used to build checkout flows for major US media and telecommunications companies. It's generated thousands of sales worth millions of dollars of recurring revenue.
    </p>
    <p><em><strong>I've also helped build:</strong></em></p>
    <ul>
      <li>Mobile and desktop checkout flows.</li>
      <li>Multiple full site rebuilds.</li>
      <li>An automated visual regression testing system to help minimize the developer time needed for QA.</li>
    </ul>
    <p><em>I also do freelance work on the side.</em></p>
    <p><em><strong>I'm actively looking for new opportunities.</strong></em> If you think we may be a good fit to work together feel free to reach out.</p>
  </div>
)
