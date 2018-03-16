import * as React from 'react'
import * as styles from './App.css'

export const App = (props) =>
    <div className={styles.app}>
        {props.children}
    </div>
