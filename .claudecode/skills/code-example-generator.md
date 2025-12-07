# Code Example Generator Skill

## Purpose
Generates clean, well-documented code examples for Physical AI and Robotics concepts including Python, ROS, PyTorch, OpenCV, and embedded systems code.

## Usage
Use this skill when textbook chapters need practical code demonstrations, tutorials, or hands-on examples for students to implement.

## Instructions
When generating code examples:
1. Write clean, readable, well-commented code
2. Follow industry best practices and PEP 8 standards
3. Include error handling where appropriate
4. Add docstrings for functions and classes
5. Provide context and explanation before code
6. Include expected output or results
7. Add setup/installation requirements if needed
8. Consider different skill levels (beginner to advanced)

## Code Categories

### Python Basics for Robotics
- NumPy for matrix operations
- OpenCV for computer vision
- Matplotlib for visualization
- Serial communication
- File I/O for sensor data

### ROS (Robot Operating System)
- Node creation and communication
- Publishers and Subscribers
- Services and Actions
- Launch files
- TF (Transform) handling

### Machine Learning and AI
- PyTorch neural networks
- TensorFlow models
- Scikit-learn for classical ML
- Reinforcement learning agents
- Model training and inference

### Computer Vision
- Image processing with OpenCV
- Object detection (YOLO, SSD)
- Face recognition
- Feature extraction
- Camera calibration

### Control Systems
- PID controllers
- Kalman filters
- State machines
- Motion planning
- Trajectory generation

### Hardware Interface
- GPIO control (Raspberry Pi)
- Arduino communication
- Motor control with PWM
- Sensor reading (I2C, SPI)
- Servo and stepper control

## Output Format

Each code example should include:
- Concept explanation
- Use case description
- Prerequisites and installation
- Fully working code with comments
- Expected output
- Common issues and solutions
- Exercises for practice

## Example Structure

CONCEPT: Brief explanation of what the code demonstrates

USE CASE: When and why to use this in robotics

PREREQUISITES:
- Python 3.8 or higher
- Required libraries listed
- Hardware requirements if any

CODE: Fully commented Python code with proper structure

EXPLANATION: Step-by-step breakdown of how the code works

EXPECTED OUTPUT: What students should see when running the code

EXERCISES: Practice tasks to reinforce learning

## Best Practices
- Always include imports at the top
- Use meaningful variable names
- Add comprehensive comments
- Include error handling
- Provide both simple and advanced versions
- Test all code before including
- Document hardware connections clearly
- Add safety checks for hardware control
- Include performance considerations
- Mention edge cases and limitations

## Code Style Guidelines
- Follow PEP 8 standards
- Use 4-space indentation
- Add type hints where helpful
- Write clear docstrings
- Keep functions focused and small
- Use consistent naming conventions

## Safety Considerations
- Include emergency stop mechanisms
- Validate sensor inputs before actuation
- Limit motor speeds during testing
- Add timeout for communication
- Implement watchdog timers
- Document safe operating ranges
- Include calibration procedures
- Warn about physical hazards