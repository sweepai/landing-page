import { Box } from "@chakra-ui/react";
import React from "react";

class User extends React.Component {
    render() {
        const { children, ...props } = this.props;
        return (
            <Box rounded="full" minW="3rem" w="3rem" h="3rem" display="flex" justifyContent="center" alignItems="center" color="purple.300" borderColor="purple.300" borderWidth={1} p={1} {...props}>
                {children}
            </Box>
        );
    }
}

export default User;

