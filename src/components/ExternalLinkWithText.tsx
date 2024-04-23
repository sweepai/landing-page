import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Link, LinkProps } from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";

type ExternalLinkWithTextProps = {
    children: React.ReactNode,
    href: string
    includeIcon?: boolean,
    emoji?: IconDefinition  
} & LinkProps;

export default function ExternalLinkWithText({ children, href, includeIcon = true, ...rest }: ExternalLinkWithTextProps) : JSX.Element {
    return (
        <Link href={href} isExternal rel="noopener noreferrer" {...rest}>
            {emoji && <><FontAwesomeIcon icon={emoji} />&nbsp;</>}
            {children}{includeIcon && <>&nbsp;<ExternalLinkIcon /></>}
        </Link>
    );
}