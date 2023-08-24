import React from 'react';
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Link, LinkProps } from "@chakra-ui/react";

type ExternalLinkWithTextProps = {
    children: React.ReactNode,
    href: string
    includeIcon?: boolean
} & LinkProps;

export default class ExternalLinkWithText extends React.Component<ExternalLinkWithTextProps> {
    render() {
        const { children, href, includeIcon = true, ...rest } = this.props;
        return (
            <Link href={href} isExternal rel="noopener noreferrer" {...rest}>
                {children}{includeIcon && <>&nbsp;<ExternalLinkIcon /></>}
            </Link>
        );
    }
}