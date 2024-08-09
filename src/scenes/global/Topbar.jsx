import { Box, IconButton, useTheme } from "@mui/material";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme"; // Conservez cette ligne si c'est la bonne source
// import InputBase from "@mui/material"; // Conservez cette ligne
import InputBase from "@mui/material/InputBase";

import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";
// import styled from "@emotion/styled";

// const styledBox = styled(Box)``;


const Topbar = () => {
    const theme = useTheme();
    console.log('Theme:', theme);
    console.log("HELLOOOOOOOOOOOO");
    const colors = tokens(theme.palette.mode);
    console.log('Colors:', colors);
    
    const colorMode = useContext(ColorModeContext);
    console.log('ColorMode:', colorMode);

    if (!colors) {
        console.error('Colors is undefined!');
        return null;
    }

    return (
        <Box display="flex" justifyContent="space-between" p={2}>
            {/* SERACH BAR */}
            <Box 
                display="flex" 
                backgroundColor={colors.primary[400]}
                borderRadius="3px"
            >     
                <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search" />   
                <IconButton type="button" sx={{ p: 1 }}> 
                    <SearchIcon />
                </IconButton>
            </Box>
            {/* ICONS */}
            <Box display="flex" >
                <IconButton sx={{ display: "flex" }} onClick={colorMode.toggleColorMode}>
                    {theme.palette.mode === 'dark' ? ( 
                        <DarkModeOutlinedIcon />
                    ) : (
                        <LightModeOutlinedIcon /> 
                    )}
                </IconButton>
                <IconButton sx={{ display: "flex" }}>
                    <NotificationsOutlinedIcon />
                </IconButton>
                <IconButton sx={{ display: "flex" }}>
                    <SettingsOutlinedIcon />
                </IconButton>
                <IconButton sx={{ display: "flex" }}>
                    <PersonOutlinedIcon />
                </IconButton>
            </Box>
        </Box>
    );
}


export default Topbar 
