import { cleanup, fireEvent, render, screen, waitFor, within } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import emailjs from '@emailjs/browser';
import App from '../App';
import About from './About/About';
import Contactme from './ContactMe/Contactme';
import Header from './Header/Header';
import Projects from './Projects/Projects';
import Section from './Section/Section';
import Skills from './Skills/Skills';

vi.mock('@emailjs/browser', () => ({
  default: { send: vi.fn() },
}));

beforeEach(() => {
  vi.mocked(emailjs.send).mockResolvedValue({});
  vi.stubEnv('VITE_EMAILJS_SERVICE_ID', 'service-test');
  vi.stubEnv('VITE_EMAILJS_TEMPLATE_ID', 'template-test');
  vi.stubEnv('VITE_EMAILJS_PUBLIC_KEY', 'public-test');
});

afterEach(() => {
  cleanup();
  vi.unstubAllEnvs();
  vi.clearAllMocks();
});

describe('Header', () => {
  it('renders the portfolio identity and navigation destinations', () => {
    render(<Header />);

    expect(screen.getByRole('heading', { name: 'Yasin Mulla' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '#');
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '#aboutMe');
    expect(screen.getByRole('link', { name: 'Skills' })).toHaveAttribute('href', '#skills');
    expect(screen.getByRole('link', { name: 'Projects' })).toHaveAttribute('href', '#projects');
    expect(screen.getByRole('link', { name: 'Contact Me' })).toHaveAttribute('href', '#contactme');
  });
});

describe('Section', () => {
  it('renders the introduction and developer image', () => {
    render(<Section />);

    expect(screen.getByRole('heading', { name: "I'm Yasin" })).toBeInTheDocument();
    expect(screen.getByText(/specializing in building modern web applications/)).toBeInTheDocument();
    expect(screen.getByRole('img', { name: 'Developer' })).toHaveAttribute('src', '/Portfolio/hero2.jpg ');
  });
});

describe('About', () => {
  it('renders the about description and all four statistics', () => {
    render(<About />);

    expect(screen.getByRole('heading', { name: 'About Me' })).toBeInTheDocument();
    expect(screen.getByText(/building modern, scalable web applications/)).toBeInTheDocument();
    expect(screen.getByText('6.3 Years')).toBeInTheDocument();
    expect(screen.getByText('10+')).toBeInTheDocument();
    expect(screen.getByText('4000+')).toBeInTheDocument();
    expect(screen.getByText('4+')).toBeInTheDocument();
    expect(screen.getByText('Projects Completed')).toBeInTheDocument();
  });
});

describe('Skills', () => {
  it('renders the technology list with descriptive images', () => {
    render(<Skills />);

    expect(screen.getByRole('heading', { name: 'Essential Tools I Used' })).toBeInTheDocument();
    for (const skill of ['React', 'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS', 'MongoDB', 'Node.js']) {
      expect(screen.getByText(skill)).toBeInTheDocument();
      expect(screen.getByRole('img', { name: skill })).toHaveAttribute('src');
    }
    expect(screen.getAllByRole('img')).toHaveLength(16);
  });
});

describe('Projects', () => {
  it('shows project cards and opens and closes a project detail modal', () => {
    render(<Projects />);

    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(5);
    fireEvent.click(screen.getByRole('heading', { name: 'UBS Online Banking' }));

    const dialogContent = screen.getByText(/Developed and maintained UI for Infosys client/);
    expect(dialogContent).toBeInTheDocument();
    fireEvent.click(within(dialogContent.parentElement).getByRole('button', { name: 'Close' }));
    expect(screen.queryByText(/Developed and maintained UI for Infosys client/)).not.toBeInTheDocument();
  });
});

describe('Contactme', () => {
  it('renders contact methods and sends the completed form through EmailJS', async () => {
    render(<Contactme />);

    expect(screen.getByTitle('Phone')).toHaveAttribute('href', 'tel:+917756903575');
    expect(screen.getByTitle('Email')).toHaveAttribute('href', 'mailto:yasinmuidev46@gmail.com');
    expect(screen.getByTitle('LinkedIn')).toHaveAttribute('target', '_blank');
    expect(screen.getByTitle('GitHub')).toHaveAttribute('href', 'https://github.com/Yasindev46');

    fireEvent.change(screen.getByPlaceholderText('Enter Your Name'), { target: { value: 'Ada Lovelace' } });
    fireEvent.change(screen.getByPlaceholderText('Enter Your Email'), { target: { value: 'ada@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Enter Your Message'), { target: { value: 'Hello!' } });
    fireEvent.submit(screen.getByRole('button', { name: 'Send Message' }).closest('form'));

    await waitFor(() => expect(emailjs.send).toHaveBeenCalledWith(
      'service-test',
      'template-test',
      {
        from_name: 'Ada Lovelace',
        from_email: 'ada@example.com',
        message: 'Hello!',
        to_email: 'yasinmuidev46@gmail.com',
      },
      'public-test',
    ));
    expect(screen.getByPlaceholderText('Enter Your Name')).toHaveValue('');
    expect(screen.getByPlaceholderText('Enter Your Email')).toHaveValue('');
    expect(screen.getByPlaceholderText('Enter Your Message')).toHaveValue('');
  });
});

describe('App', () => {
  it('renders the complete portfolio with every main section', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: 'Yasin Mulla' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'About Me' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Essential Tools I Used' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'My Projects' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Contact Me' })).toBeInTheDocument();
  });
});