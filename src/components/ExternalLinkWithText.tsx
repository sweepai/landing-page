import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Link, LinkProps } from "@chakra-ui/react";

type ExternalLinkWithTextProps = {
    children: React.ReactNode,
    href: string
    includeIcon?: boolean
} & LinkProps;

export default function ExternalLinkWithText({ children, href, includeIcon = true, ...rest }: ExternalLinkWithTextProps) : JSX.Element {
    return (
        <Link href={href} isExternal rel="noopener noreferrer" {...rest}>
            {children}{includeIcon && <>&nbsp;<ExternalLinkIcon /></>}
        </Link>
    );
}