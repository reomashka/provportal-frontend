import React from 'react';
import styles from './index.module.scss';

interface MarkdownWrapperProps {
	children: React.ReactNode;
}

const MarkdownWrapper = ({ children }: MarkdownWrapperProps) => {
	return <div className={styles.wrapper}>{children}</div>;
};

export default MarkdownWrapper;
