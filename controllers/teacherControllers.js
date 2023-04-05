const teacher = require('../teacher.json');

class TeacherController{
    static  getAllTeacher(req, res){
        try {
            res.status(200).json(teacher)
        } catch (error) {
            res.status(500).json(error)    
        }
    }
}

module.exports = TeacherController