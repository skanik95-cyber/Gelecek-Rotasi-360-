// Local Storage Management System
// Simulates user storage when Firebase is unavailable

const storage = {
    // Get current logged-in user from localStorage
    getCurrentUser: function() {
        const user = localStorage.getItem('currentUser');
        return user ? JSON.parse(user) : null;
    },

    // Set current user in localStorage
    setCurrentUser: function(user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
    },

    // Clear current user from localStorage
    clearCurrentUser: function() {
        localStorage.removeItem('currentUser');
    },

    // Get all stored users
    getAllUsers: function() {
        const users = localStorage.getItem('allUsers');
        return users ? JSON.parse(users) : [];
    },

    // Save user to database (localStorage)
    saveUser: function(user) {
        const users = this.getAllUsers();
        const index = users.findIndex(u => u.id === user.id);
        if (index >= 0) {
            users[index] = user;
        } else {
            users.push(user);
        }
        localStorage.setItem('allUsers', JSON.stringify(users));
    },

    // Get student test results
    getStudentResults: function(studentId) {
        const results = localStorage.getItem(`results_${studentId}`);
        return results ? JSON.parse(results) : [];
    },

    // Save student test results
    saveStudentResults: function(studentId, results) {
        const allResults = this.getStudentResults(studentId);
        allResults.push({
            ...results,
            timestamp: new Date().toISOString()
        });
        localStorage.setItem(`results_${studentId}`, JSON.stringify(allResults));
    },

    // Get advisor's assigned students
    getAdvisorStudents: function(advisorId) {
        const students = localStorage.getItem(`advisor_students_${advisorId}`);
        return students ? JSON.parse(students) : [];
    },

    // Assign student to advisor
    assignStudentToAdvisor: function(advisorId, studentId) {
        const students = this.getAdvisorStudents(advisorId);
        if (!students.includes(studentId)) {
            students.push(studentId);
            localStorage.setItem(`advisor_students_${advisorId}`, JSON.stringify(students));
        }
    }
};

// Export for use in browser
window.storage = storage;
