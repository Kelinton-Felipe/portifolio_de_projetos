import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Projects = () => {
  const projects = [
    {
      title: 'E-commerce React',
      description: 'Plataforma completa de e-commerce com carrinho, checkout e integração de pagamento. Interface moderna e responsiva.',
      technologies: ['React', 'TypeScript', 'Stripe', 'Firebase'],
      image: '/api/placeholder/400/300',
      github: '#',
      live: '#',
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      title: 'Dashboard Analytics',
      description: 'Dashboard interativo para visualização de dados com gráficos em tempo real e relatórios customizáveis.',
      technologies: ['React', 'D3.js', 'Node.js', 'MongoDB'],
      image: '/api/placeholder/400/300',
      github: '#',
      live: '#',
      gradient: 'from-green-500 to-teal-600'
    },
    {
      title: 'App Mobile PWA',
      description: 'Progressive Web App com funcionalidades offline, notificações push e sincronização de dados.',
      technologies: ['React', 'PWA', 'Service Workers', 'IndexedDB'],
      image: '/api/placeholder/400/300',
      github: '#',
      live: '#',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      title: 'API RESTful',
      description: 'API robusta com autenticação JWT, documentação Swagger e testes automatizados completos.',
      technologies: ['Node.js', 'Express', 'JWT', 'PostgreSQL'],
      image: '/api/placeholder/400/300',
      github: '#',
      live: '#',
      gradient: 'from-orange-500 to-red-600'
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
                      <Button
                        size="icon"
                        variant="secondary"
                        className="w-8 h-8 bg-background/80 hover:bg-background"
                        asChild
                      >
                        <a href={project.live} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </Button>
                    </div>
                    
                    {/* Placeholder content for image */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white/80 text-6xl font-bold opacity-50">
                        {project.title.charAt(0)}
                      </div>
                    </div>
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
                    <Button
                      size="sm"
                      className="flex-1 bg-primary hover:bg-primary/90 transition-all duration-normal"
                      asChild
                    >
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Ver Demo
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