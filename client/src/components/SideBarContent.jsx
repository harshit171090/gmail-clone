import { Box, Button } from "@mui/material";
import { CreateOutlined } from "@mui/icons-material";

const SideBarContent = () => {
    return (
        <Box>
            <Box>
                <Button>
                    <CreateOutlined />Compose
                </Button>
            </Box>
            <Box></Box>
        </Box>
    )
}

export default SideBarContent;