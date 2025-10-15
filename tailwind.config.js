/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6EEF7',
          100: '#C2D5EB',
          200: '#9BBCDF',
          300: '#74A3D3',
          400: '#4D8AC7',
          500: '#2671BB',
          600: '#1E5A95',
          700: '#174370',
          800: '#0F2C4A',
          900: '#081625',
          950: '#0F2C59', // Main primary color
        },
        secondary: {
          50: '#FFF6ED',
          100: '#FFEBD8',
          200: '#FFD4A8',
          300: '#FFBD79',
          400: '#FFA64A',
          500: '#F9943B', // Main secondary color
          600: '#F47A00',
          700: '#CC6600',
          800: '#A35200',
          900: '#7A3E00',
          950: '#522A00',
        },
        accent: {
          50: '#E5F8FF',
          100: '#B8EEFF',
          200: '#8AE4FF',
          300: '#5CDAFF',
          400: '#2ED0FF',
          500: '#00C6FF',
          600: '#009ECF',
          700: '#0077A0',
          800: '#005070',
          900: '#002940',
        },
        success: {
          500: '#10B981',
          600: '#059669',
        },
        warning: {
          500: '#F59E0B',
          600: '#D97706',
        },
        error: {
          500: '#EF4444',
          600: '#DC2626',
        },
        neutral: {
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
          950: '#030712',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};