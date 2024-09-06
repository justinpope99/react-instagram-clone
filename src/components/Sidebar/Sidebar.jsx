import { Avatar, Box, Flex, Link, Tooltip } from "@chakra-ui/react"
import { Link as RouterLink } from "react-router-dom"
import { CreatePostLogo, InstagramLogo, InstagramMobileLogo, NotificationsLogo, SearchLogo } from "../../assets/constants.jsx"
import { AiFillHome } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";


const Sidebar = () => {

    const sidebarItems = [
        {
            icon: <AiFillHome size={25} />,
            text: "Home",
            link: "/",
        },
        {
            icon: <SearchLogo />,
            text: "Search",
        },
        {
            icon: <NotificationsLogo />,
            text: "Notifications",
        },
        {
            icon: <CreatePostLogo />,
            text: "Create",
        },
        {
            icon: <Avatar size={"sm"} name="Burak Orkmez" src="/public/profilepic.png" />,
            text: "Profile",
            link: "/asaprogrammer",
        },
    ];

  return <Box
    height={"100vh"}
    borderRight={"1px solid"}
    borderColor={"whiteAlpha.300"}
    py={8}
    position={"sticky"}
    top={0}
    left={0}
    px={{base:2, md:4}}
  >

    <Flex direction={"column"} gap={10} w={"full"} height={"full"}>
        {/* This code: Link to={"/"} as={RouterLink} allows us to use the link as it's coming from react-router-dom,
        but also allows us to add styles to it as it's also coming from chakra */}
        {/* This will be the Logo used on the Desktop */}
        <Link to={"/"} as={RouterLink} pl={2} display={{base:"none", md:"block"}} cursor={"pointer"}>
            <InstagramLogo />
        </Link>
        {/* This will be the Logo used on Mobile */}
        <Link to={"/"} as={RouterLink} p={2} display={{base:"block", md:"none"}} cursor={"pointer"}
            borderRadius={6}
            // Hover state in chakra
            _hover={{
                bg: "whiteAlpha.200"
            }}
            w={10}
            >
            <InstagramMobileLogo />
        </Link>
        <Flex direction={"column"} gap={5} cursor={"pointer"}>
            {/* For each sidebarItem, we will have a Tooltip with props */}
            {sidebarItems.map((item, index) => (
                <Tooltip
                key={index}
                hasArrow
                label={item.text}
                placement="right" // The Tooltip will be on the right when you hover over it
                ml={1}
                openDelay={500} // This will add a half a second delay when you hover over an item
                display={{base:'block', md:'none'}} // This Tooltip will only be shown in smaller screens
                >
                    <Link
                        display={"flex"}
                        to={item.link || null} //If the item has a link, it will take us there, otherwise, it will be in the null state
                        as={RouterLink}
                        alignItems={"center"}
                        gap={4}
                        _hover={{bg: "whiteAlpha.400"}}
                        borderRadius={6}
                        p={2}
                        w={{base: 10, md: "full"}}
                        justifyContent={{base: "center", md: "flex-start"}}
                    >
                        {item.icon}
                        <Box display={{base: "none", md: "block"}}>{item.text}</Box>
                    </Link>
                </Tooltip>
            ))}
        </Flex>
                <Tooltip
                hasArrow
                label={"Logout"}
                placement="right" // The Tooltip will be on the right when you hover over it
                ml={1}
                openDelay={500} // This will add a half a second delay when you hover over an item
                display={{base:'block', md:'none'}}
                >
                    <Link
                        display={"flex"}
                        to={"/auth"} //If the item has a link, it will take us there, otherwise, it will be in the null state
                        as={RouterLink}
                        alignItems={"center"}
                        gap={4}
                        _hover={{bg: "whiteAlpha.400"}}
                        borderRadius={6}
                        p={2}
                        w={{base: 10, md: "full"}}
                        mt={"auto"} // This will push the button to the bottom
                        justifyContent={{base: "center", md: "flex-start"}}
                    >
                        <BiLogOut size={25} />
                        <Box display={{base: "none", md: "block"}}>Logout</Box>
                    </Link>
                </Tooltip>
    </Flex>
      
  </Box>
  
}

export default Sidebar