import { EmailIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { FaDiscord, FaGithub, FaTwitter } from "react-icons/fa";
import logo from "../assets/icon.png";

{item.label}
                    {
                      item.label !== "Buy Sweep Pro" &&
                      <IconButton
                        key={item.label}
                        icon={item.icon}
                        variant="ghost"
                        aria-label={item.label}
                        onClick={() => {
                          window.open(item.link, "_blank");
                        }}
                      />
                    }
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </Flex>
        </HStack>
      </Box>
    );
  }
}
                      aria-label={item.label}
                      onClick={() => {
                        window.open(item.link, "_blank");
                      }}
                    />
                  }
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Box>
  );
}