import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { Link } from "react-router-dom";
import { 
    Box, 
    Container, 
    Typography, 
    Paper, 
    Table, 
    TableBody, 
    TableCell, 
    TableContainer, 
    TableHead, 
    TableRow, 
    Button, 
    IconButton,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Tooltip,
    useTheme,
    alpha
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PersonIcon from "@mui/icons-material/Person";
import { useColorMode } from "../theme/useColorMode";

const AdminUsers = () => {
    const { authorizationToken } = useAuth();
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
    const [userToDelete, setUserToDelete] = useState(null);
    const { isDarkMode } = useColorMode();
    const theme = useTheme();

    const getAllUsersData = async () => {
        try {
            setLoading(true);
            const response = await fetch("http://localhost:5000/api/admin/users", {
                method: "GET",
                headers: {
                    Authorization: authorizationToken,
                },
            });

            if (response.ok) {
                const data = await response.json();
                setUsers(data);
            } else {
                console.error("Failed to fetch users");
            }
        } catch (error) {
            console.error("Error fetching users:", error.message);
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteClick = (user) => {
        setUserToDelete(user);
        setDeleteDialogOpen(true);
    };

    const handleDeleteCancel = () => {
        setDeleteDialogOpen(false);
        setUserToDelete(null);
    };

    const handleDeleteConfirm = async () => {
        if (!userToDelete) return;
        
        try {
            const response = await fetch(`http://localhost:5000/api/admin/users/delete/${userToDelete._id}`, {
                method: "DELETE",
                headers: {
                    Authorization: authorizationToken,
                },
            });

            if (response.ok) {
                const data = await response.json();
                console.log("User after deletion:", data);
                getAllUsersData();
            } else {
                console.error("Failed to delete user");
            }
        } catch (error) {
            console.error("Failed to delete user:", error.message);
            if (error.response) {
                console.error("Error details:", error.response.data);
            }
        } finally {
            setDeleteDialogOpen(false);
            setUserToDelete(null);
        }
    };

    useEffect(() => {
        getAllUsersData();
    }, []);

    return (
        <Box className="py-16">
            <Container maxWidth="lg">
                <Box className="mb-10 text-center">
                    <Typography 
                        variant="h3"
                        component="h1" 
                        fontWeight="bold"
                        color="primary"
                        gutterBottom
                        sx={{ mb: 2 }}
                    >
                        User Management
                    </Typography>
                    <Typography 
                        variant="h6"
                        color="text.secondary"
                        className="max-w-2xl mx-auto"
                    >
                        View and manage all registered users in the system
                    </Typography>
                </Box>

                <Paper 
                    elevation={3} 
                    className="overflow-hidden"
                    sx={{
                        backgroundColor: isDarkMode ? alpha(theme.palette.background.paper, 0.8) : theme.palette.background.paper,
                        borderRadius: 2,
                    }}
                >
                    <TableContainer>
                        <Table sx={{ minWidth: 650 }}>
                            <TableHead>
                                <TableRow sx={{ 
                                    backgroundColor: isDarkMode ? 'dark.lighter' : 'light.dark',
                                    height: 64,
                                }}>
                                    <TableCell sx={{ 
                                        fontWeight: 'bold',
                                        fontSize: '1.2rem',
                                        py: 2.5,
                                    }}>Name</TableCell>
                                    <TableCell sx={{ 
                                        fontWeight: 'bold',
                                        fontSize: '1.2rem',
                                        py: 2.5,
                                    }}>Email</TableCell>
                                    <TableCell sx={{ 
                                        fontWeight: 'bold',
                                        fontSize: '1.2rem',
                                        py: 2.5,
                                    }}>Phone</TableCell>
                                    <TableCell sx={{ 
                                        fontWeight: 'bold',
                                        fontSize: '1.2rem',
                                        py: 2.5,
                                    }} align="center">Actions</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {loading ? (
                                    <TableRow>
                                        <TableCell colSpan={4} align="center">
                                            <Typography variant="h6" className="py-6">
                                                Loading users...
                                            </Typography>
                                        </TableCell>
                                    </TableRow>
                                ) : users.length === 0 ? (
                                    <TableRow>
                                        <TableCell colSpan={4} align="center">
                                            <Box className="py-10 text-center">
                                                <PersonIcon sx={{ fontSize: 64, color: 'text.disabled', mb: 3 }} />
                                                <Typography variant="h6" color="text.secondary">
                                                    No users found
                                                </Typography>
                                            </Box>
                                        </TableCell>
                                    </TableRow>
                                ) : (
                                    users.map((user) => (
                                        <TableRow 
                                            key={user._id}
                                            sx={{ 
                                                '&:hover': { 
                                                    backgroundColor: isDarkMode 
                                                        ? alpha(theme.palette.primary.main, 0.08) 
                                                        : alpha(theme.palette.primary.main, 0.04) 
                                                },
                                                height: 60,
                                            }}
                                        >
                                            <TableCell sx={{ 
                                                fontSize: '1.1rem',
                                                py: 2,
                                            }}>{user.username}</TableCell>
                                            <TableCell sx={{ 
                                                fontSize: '1.1rem',
                                                py: 2,
                                            }}>{user.email}</TableCell>
                                            <TableCell sx={{ 
                                                fontSize: '1.1rem',
                                                py: 2,
                                            }}>{user.phone}</TableCell>
                                            <TableCell align="center">
                                                <Box className="flex justify-center gap-3">
                                                    <Tooltip title="Edit User">
                                                        <IconButton 
                                                            component={Link} 
                                                            to={`/admin/users/${user._id}/edit`}
                                                            color="primary"
                                                            size="medium"
                                                        >
                                                            <EditIcon fontSize="medium" />
                                                        </IconButton>
                                                    </Tooltip>
                                                    <Tooltip title="Delete User">
                                                        <IconButton 
                                                            onClick={() => handleDeleteClick(user)}
                                                            color="error"
                                                            size="medium"
                                                        >
                                                            <DeleteIcon fontSize="medium" />
                                                        </IconButton>
                                                    </Tooltip>
                                                </Box>
                                            </TableCell>
                                        </TableRow>
                                    ))
                                )}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </Container>

            {/* Delete Confirmation Dialog */}
            <Dialog
                open={deleteDialogOpen}
                onClose={handleDeleteCancel}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                PaperProps={{
                    sx: {
                        borderRadius: 2,
                        padding: 2,
                        minWidth: 400,
                    }
                }}
            >
                <DialogTitle id="alert-dialog-title" sx={{ fontSize: '1.5rem', pb: 1 }}>
                    {"Confirm User Deletion"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description" sx={{ fontSize: '1.1rem', py: 1 }}>
                        Are you sure you want to delete the user "{userToDelete?.username}"? 
                        This action cannot be undone.
                    </DialogContentText>
                </DialogContent>
                <DialogActions sx={{ px: 3, pb: 2 }}>
                    <Button 
                        onClick={handleDeleteCancel} 
                        color="primary"
                        size="large"
                        sx={{ fontSize: '1rem' }}
                    >
                        Cancel
                    </Button>
                    <Button 
                        onClick={handleDeleteConfirm} 
                        color="error" 
                        variant="contained"
                        size="large"
                        sx={{ fontSize: '1rem' }}
                        autoFocus
                    >
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    );
};

export default AdminUsers;
