import { motion } from 'framer-motion';
import { Code2, Lightbulb, Users, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const skills = [
    'React', 'TypeScript', 'Next.js', 'Tailwind CSS',
    'Node.js', 'Express', 'PostgreSQL', 'MongoDB',
    'Git', 'Docker', 'AWS', 'Figma'
  ];

  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Código limpo, manutenível e bem documentado'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Aplicações otimizadas e com alta performance'
    },
    {
      icon: Users,
      title: 'UX/UI Focus',
      description: 'Experiências intuitivas e centradas no usuário'
    },
    {
      icon: Lightbulb,
      title: 'Inovação',
      description: 'Sempre buscando novas tecnologias e soluções'
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sobre <span className="bg-text-gradient bg-clip-text text-transparent">Mim</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Conheça um pouco mais sobre minha jornada e paixão pelo desenvolvimento
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Profile Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold mb-6">
                Desenvolvedor Frontend Apaixonado
              </h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Com mais de <span className="text-primary font-medium">3 anos</span> de experiência 
                  em desenvolvimento frontend, especializei-me em criar interfaces modernas e funcionais 
                  que proporcionam experiências excepcionais aos usuários.
                </p>
                <p>
                  Minha jornada começou com curiosidade sobre como as coisas funcionam na web. 
                  Hoje, transformo ideias em realidade digital, sempre focando em 
                  <span className="text-accent font-medium"> performance</span>, 
                  <span className="text-accent font-medium"> acessibilidade</span> e 
                  <span className="text-accent font-medium"> usabilidade</span>.
                </p>
                <p>
                  Quando não estou codando, você pode me encontrar aprendendo novas tecnologias, 
                  contribuindo em projetos open source ou compartilhando conhecimento com a comunidade dev.
                </p>
              </div>
            </motion.div>

            {/* Skills Grid */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h4 className="text-xl font-semibold mb-6">Tecnologias & Ferramentas</h4>
              <div className="grid grid-cols-3 gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="bg-card border border-border rounded-lg px-3 py-2 text-center text-sm font-medium hover:border-primary/50 hover:bg-primary/5 transition-all duration-normal cursor-default"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={highlight.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="text-center h-full bg-card-gradient border-border hover:border-primary/50 transition-all duration-normal group shadow-card">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      <highlight.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h5 className="font-semibold mb-2 group-hover:text-primary transition-colors">
                      {highlight.title}
                    </h5>
                    <p className="text-sm text-muted-foreground">
                      {highlight.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;