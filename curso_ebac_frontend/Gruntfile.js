module.exports = (grunt) => {
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        less: {
            development: {
                files: {
                    "dev/styles/main.css": "src/styles/main.less"
                }
            },
            production: {
                options: {
                    compress: true
                },
                files: {
                    "dist/styles/main.min.css": "src/styles/main.less"
                }
            }
        },
        watch: {
            less: {
                files: ["src/styles/**/*.less"],
                tasks: ["less:development"]
            },
            html: {
                files: ["src/index.html"],
                tasks: ["replace:dev"]
            },
            js: {
                files: ["src/scripts/**/*.js"]
            }
        },
        replace: {
            dev: {
                options: {
                    patterns: [{
                        match: "CSS_ADDRESS",
                        replacement: "./styles/main.css"
                    },
                    {
                        match: "JS_ADDRESS",
                        replacement: "../src/scripts/main.js"
                    }]
                },
                files: [{
                    expand: true,
                    flatten: true,
                    src: ["src/index.html"],
                    dest: "dev/"
                }]
            },
            dist: {
                options: {
                    patterns: [{
                        match: "CSS_ADDRESS",
                        replacement: "./styles/main.min.css"
                    },
                    {
                        match: "JS_ADDRESS",
                        replacement: "./scripts/main.min.js"
                    }]
                },
                files: [{
                    expand: true,
                    flatten: true,
                    src: ["src/index.html"],
                    dest: "dist/"
                }]
            }
        },
        uglify: {
            target: {
                files: {
                    "dist/scripts/main.min.js": "src/scripts/main.js"
                }
            }
        }
    })

    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-replace");

    grunt.registerTask("default", ["watch"]);
    grunt.registerTask("build", ["less:production", "replace:dist", "uglify"]);
}
