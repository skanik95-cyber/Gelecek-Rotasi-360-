// Local Authentication System
// Fallback authentication when Firebase is unavailable

const auth = {
    // Generate unique ID
    generateId: function() {
        return 'user_' + Math.random().toString(36).substr(2, 9);
    },

    // Hash password (simple hash for demo purposes)
    hashPassword: function(password) {
        let hash = 0;
        for (let i = 0; i < password.length; i++) {
            const char = password.charCodeAt(i);
            hash = ((hash << 5) - hash) + char;
            hash = hash & hash; // Convert to 32-bit integer
        }
        return Math.abs(hash).toString(16);
    },

    // Create new student account
    createStudent: function(firstName, lastName, password) {
        try {
            const username = firstName + (lastName ? '.' + lastName : '');
            const existingUsers = storage.getAllUsers();
            
            // Check if user already exists
            if (existingUsers.find(u => u.username.toLowerCase() === username.toLowerCase())) {
                return { ok: false, message: 'Bu kullanıcı adı zaten kullanılıyor.' };
            }

            const student = {
                id: this.generateId(),
                username: username,
                firstName: firstName,
                lastName: lastName,
                password: this.hashPassword(password),
                role: 'student',
                createdAt: new Date().toISOString()
            };

            storage.saveUser(student);
            return { 
                ok: true, 
                message: 'Öğrenci hesabı oluşturuldu.',
                id: student.id,
                username: student.username
            };
        } catch (error) {
            console.error('Student creation error:', error);
            return { ok: false, message: 'Hesap oluşturma sırasında hata oluştu.' };
        }
    },

    // Create new advisor account
    createAdvisor: function(firstName, lastName, password) {
        try {
            const username = 'advisor-' + firstName + (lastName ? '.' + lastName : '');
            const existingUsers = storage.getAllUsers();
            
            // Check if user already exists
            if (existingUsers.find(u => u.username.toLowerCase() === username.toLowerCase())) {
                return { ok: false, message: 'Bu danışman adı zaten kullanılıyor.' };
            }

            const advisor = {
                id: this.generateId(),
                username: username,
                firstName: firstName,
                lastName: lastName,
                password: this.hashPassword(password),
                role: 'advisor',
                createdAt: new Date().toISOString()
            };

            storage.saveUser(advisor);
            return { 
                ok: true, 
                message: 'Danışman hesabı oluşturuldu.',
                id: advisor.id,
                username: advisor.username
            };
        } catch (error) {
            console.error('Advisor creation error:', error);
            return { ok: false, message: 'Danışman hesabı oluşturma sırasında hata oluştu.' };
        }
    },

    // Login user
    login: function(username, password) {
        try {
            const users = storage.getAllUsers();
            const user = users.find(u => u.username.toLowerCase() === username.toLowerCase());
            
            if (!user) {
                return { ok: false, message: 'Kullanıcı adı veya şifre yanlış.' };
            }

            const hashedPassword = this.hashPassword(password);
            if (user.password !== hashedPassword) {
                return { ok: false, message: 'Kullanıcı adı veya şifre yanlış.' };
            }

            const currentUser = {
                id: user.id,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                role: user.role
            };

            storage.setCurrentUser(currentUser);
            return { 
                ok: true, 
                message: 'Başarıyla giriş yaptınız.',
                role: user.role
            };
        } catch (error) {
            console.error('Login error:', error);
            return { ok: false, message: 'Giriş yapılamadı.' };
        }
    },

    // Get current user
    getCurrentUser: function() {
        return storage.getCurrentUser();
    },

    // Logout user
    logout: function() {
        storage.clearCurrentUser();
        return { ok: true, message: 'Başarıyla çıkış yaptınız.' };
    },

    // Check if user is authenticated
    isAuthenticated: function() {
        return this.getCurrentUser() !== null;
    },

    // Get user by ID
    getUserById: function(userId) {
        const users = storage.getAllUsers();
        return users.find(u => u.id === userId);
    },

    // Get all students (for advisors)
    getAllStudents: function() {
        const users = storage.getAllUsers();
        return users.filter(u => u.role === 'student');
    },

    // Get all advisors
    getAllAdvisors: function() {
        const users = storage.getAllUsers();
        return users.filter(u => u.role === 'advisor');
    }
};

// Export for use in browser
window.auth = auth;
