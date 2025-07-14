import axiosInstance from '../auth/authProvider';

export const fetchUserProfile = async () => {
    try {
        const response = await axiosInstance.get('/fetchUserData', {
            headers: {
                'Content-Type': 'application/json',
            },
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching user profile:', error);
        throw error;
    }
};

export const createUser = async (uid, name, email) => {
    try {
        const response = await axiosInstance.post('/createUser', {
            uid,
            name,
            email
        });
        return response.data;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
};

export const checkUserExists = async (email) => {
    try {
        const response = await axiosInstance.get(`/checkUser?email=${email}`);
        return response.data.exists;
    } catch (error) {
        console.error('Error checking if user exists:', error);
        throw error;
    }
};