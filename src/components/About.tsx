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
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Profile Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 class="text-2xl font-semibold mb-6">
                Sobre Mim
              </h3>
              <div class="space-y-4 text-muted-foreground">
                <p>
                  Sou desenvolvedor Full Stack, apaixonado por transformar ideias em soluções digitais que realmente funcionem. Mais do que escrever código, gosto de entender como a tecnologia funciona por trás das telas e de buscar soluções que façam sentido para quem vai usar.
                </p>
                <p>
                  Já trabalhei em projetos variados, desde pequenos desafios de aprendizado até sistemas mais complexos, sempre buscando entregar código de qualidade, com atenção à performance, acessibilidade e usabilidade. Também tive a oportunidade de liderar e orientar colegas em projetos de tecnologia, ajudando equipes a evoluírem e alcançarem melhores resultados — uma experiência que me ensinou a equilibrar habilidades técnicas com empatia e comunicação clara.
                </p>
                <p>
                  Sou alguém que aprende fazendo: testando novas tecnologias, contribuindo para projetos open source ou compartilhando conhecimento com a comunidade dev. Cada linha de código é uma chance de aprender algo novo e evoluir profissionalmente.
                </p>
                <p>
                  Quando não estou programando, gosto de explorar ferramentas de design, estudar novas stacks e resolver problemas de lógica do dia a dia, sempre curioso e buscando entender o “porquê” das coisas.
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
              <h4 className="text-xl font-semibold mb-6">Tecnologias & Ferramentas que uso no dia a dia:</h4>
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