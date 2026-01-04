import React from 'react';

import styles from './MarkdownWrapper.module.scss';

interface MarkdownWrapperProps {
	children: React.ReactNode;
}

const MarkdownWrapper = ({ children }: MarkdownWrapperProps) => {
	return <div className={styles.wrapper}>{children}</div>;
};

export default MarkdownWrapper;
