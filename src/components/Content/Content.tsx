import * as React from 'react'
import * as styles from './Content.css'

import * as image from '../../../static/img/iceland.jpg'

export const Content = () =>
    <div className={styles.content}>
        <img src={image} className={styles.image} />
    </div>
