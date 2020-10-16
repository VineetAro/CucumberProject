pipeline {
    agent any

    environment {
        JAVA_HOME = '/usr/lib/jvm/java'
    }

    stages {
        stage('Build') {
            steps {
                sh 'mvn compile'
            }
        }
        stage('Test') {
            steps {
                wrap([$class: 'Xvfb', debug: true, displayName: 50]){
                    sh 'mvn test'
                }
            }
        }
        stage('Publish') {
            steps {
                step([$class: 'CucumberTestReportPublisher', fileIncludePattern: '**/test-reports/index.html'])
            }
        }
        stage('Post') {
            steps {
                echo 'Tests finished'
            }
        }
    }
}
