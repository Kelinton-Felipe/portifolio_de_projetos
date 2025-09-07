import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Projects = () => {
  const projects = [
    {
      title: 'Botflix',
      description: 'Aplicativo de recomendação de filmes baseado em preferências do usuário, com interface interativa e respostas inteligentes em tempo real.',
      technologies: ['HTML5 semântico', 'CSS3', 'JavaScript', 'n8n', 'Deploy com GitHub Pages'],
      image: '/botflix-robot.jpg',
      github: 'https://github.com/Kelinton-Felipe/Botflix',
      gradient: 'from-red-500 to-black-600'
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meus <span className="bg-text-gradient bg-clip-text text-transparent">Projetos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Uma seleção dos meus trabalhos mais recentes, mostrando diferentes tecnologias e abordagens
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group h-full bg-card-gradient border-border hover:border-primary/50 transition-all duration-normal overflow-hidden shadow-card hover:shadow-glow">
                <div className="relative overflow-hidden">
                  {/* Project Image */}
                  <div className={`h-48 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-normal">
                      <Button
                        size="icon"
                        variant="secondary"
                        className="w-8 h-8 bg-background/80 hover:bg-background"
                        asChild
                      >
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4" />
                        </a>
                      </Button>
                      
                    </div>
                    
                    <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
                  </div>
                </div>

                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-muted text-sm rounded-full text-muted-foreground border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-normal"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Código
                      </a>
                    </Button>
                    
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;