import { createSlice } from "@reduxjs/toolkit";
import portfolio from "../Data/portfolioData.json";

const initialState = {
  currentDir: "",
  history: [],
};

const cliSlice = createSlice({
  name: "cli",
  initialState,
  reducers: {
    Command: (state, action) => {
      const { input } = action.payload
      const args = input.trim().split(" ")
      const command = args[0].toLowerCase()
      const argument = args[1] || ""
      let output = ""
      let directory = ""

      switch (command) {
        case "ls":
          if (state.currentDir === "projects") {
            output = portfolio.projects.map((project) => project.name).join("   ")
          } else if (state.currentDir === "") {
            output = " projects/   contact/    skills    achievements   hobbies"
            
          }
          else if (state.currentDir === "contact") {
            output = Object.keys(portfolio.contact).join("    ")
          }
          else if (state.currentDir === "skills") {
            output = portfolio.skills.map((skill) => skill).join("\n ,  ")
          }
          else if (state.currentDir === "education") {
            output = portfolio.education.map((edu) => edu).join("\n , ")
          }
          else {
            output = `No items in ${state.currentDir}.`
          }
          break

        case "cd":
          if (argument === "projects") {
            state.currentDir = "projects"
            output = "You are now in the projects directory."
            directory = "projects"
          } else if (argument === "..") {
            state.currentDir = ""
            output = "Returned to the root directory."
          }else if (argument === "contact"){
            state.currentDir = "contact"
            output = "You are now in the contact directory."
            directory = "contact"
          } 
         
           else {
            output = `cd: '${argument}' not a directory.`
          }
          break;

          case "cat":
            if (state.currentDir === "contact" && argument === "email") {
              output = Object.values(portfolio.contact.email).join("")
            }
            else if(state.currentDir === "contact" && argument === "phone") {
              output = Object.values(portfolio.contact.phone).join("")
            }
            else if(state.currentDir === "contact" && argument === "linkedin") {
              output = Object.values(portfolio.contact.linkedin).join("")
            }
            else if(state.currentDir === "contact" && argument === "github") {
              output = Object.values(portfolio.contact.github).join("")
            }
             else if (state.currentDir === "" && argument === "achievements") {
              output = portfolio.achievements.map((achi) =>achi ).join("\n ,")
            }
            else if (state.currentDir === "" && argument === "hobbies") {
              output = portfolio.hobbies.map((achi) =>achi ).join("\n")
            }
            else if (state.currentDir === "" && argument === "skills") {
              output = portfolio.skills.map((achi) =>achi ).join(" , ")
            }
            else if (state.currentDir === "projects") {
              const project = portfolio.projects.find(
                (p) => p.name.toLowerCase() === argument.toLowerCase()
              );
              if (project) {
                output = `Name: ${project.name} \nDescription: ${project.description} \nWebLink: ${project.WebLink} \nGitHub Link : ${project.GitHub}`
              } else {
                output = `Project '${argument}' not found.`;
              }
            } else {
              output = `cat:'${argument}: No such file or directory'.`
            }
            break;
        
        case "grep" : 
            if(argument === "name" ){
                output = portfolio.name
            }
            else if (argument === "designation"){
                output = portfolio.designation
            }
            else if(argument === "summary"){
                output = portfolio.summary
            } 
            else if (state.currentDir === ""){
              output = `grep: ${argument}: is not valid. Used Only for name , summary and designation `
            }
            else{
              output = `grep: ${argument}:not valid `
            }   
            break
        case "clear" : 
            state.history.length = 0
            return

        case "--help":
          output = `Available commands for my Portfolio : -ls, -cd, -cat, -grep, -help, `
          break

        default:
          output = `Command '${command}' not found. Type '--help' for a list of commands.`
      }
      state.history.push(`$ ${input}`)
      state.history.push(`${output}`)
      state.history.push(directory)
    },
  },
})

export const { Command } = cliSlice.actions
export default cliSlice.reducer
