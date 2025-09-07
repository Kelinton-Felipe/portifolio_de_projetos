import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: 'https://linkedin.com',
      label: 'LinkedIn'
    },
    {
      icon: Twitter,
      href: 'https://twitter.com',
      label: 'Twitter'
    },
    {
      icon: Mail,
      href: 'mailto:contato@seuemail.com',
      label: 'Email'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo/Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <button
              onClick={scrollToTop}
              className="text-2xl font-bold bg-text-gradient bg-clip-text text-transparent hover:scale-105 transition-transform duration-normal"
            >
              Seu Nome
            </button>
            <p className="text-muted-foreground mt-2">
              Frontend Developer
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex space-x-6"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full flex items-center justify-center transition-all duration-normal hover:scale-110 shadow-card hover:shadow-primary"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center max-w-md"
          >
            <p className="text-muted-foreground text-sm leading-relaxed">
              Tem um projeto em mente? Vamos criar algo incrível juntos! 
              Entre em contato e vamos transformar suas ideias em realidade.
            </p>
          </motion.div>

          {/* Divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-border to-transparent"
          />

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center text-sm text-muted-foreground"
          >
            <p className="flex items-center justify-center space-x-1">
              <span>© {currentYear} Feito com</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>por Seu Nome</span>
            </p>
            <p className="mt-1">
              Desenvolvido com React, TypeScript e Tailwind CSS
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;