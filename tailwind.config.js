module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        // Primary Colors - Deep forest trust, grounding presence
        primary: {
          DEFAULT: "#2D5A4A", // primary-500
          50: "#F0F4F2", // primary-50
          100: "#D9E5DF", // primary-100
          200: "#B3CCB8", // primary-200
          300: "#8DB391", // primary-300
          400: "#5A8A6A", // primary-400
          500: "#2D5A4A", // primary-500
          600: "#24483A", // primary-600
          700: "#1B362B", // primary-700
          800: "#12241C", // primary-800
          900: "#09120E", // primary-900
        },
        // Secondary Colors - Growth energy, gentle motivation
        secondary: {
          DEFAULT: "#7BA05B", // secondary-500
          50: "#F4F7F0", // secondary-50
          100: "#E6EFDB", // secondary-100
          200: "#CDDEB7", // secondary-200
          300: "#B4CE93", // secondary-300
          400: "#97B777", // secondary-400
          500: "#7BA05B", // secondary-500
          600: "#628049", // secondary-600
          700: "#496037", // secondary-700
          800: "#304025", // secondary-800
          900: "#182013", // secondary-900
        },
        // Accent Colors - Warm achievement, celebration moments
        accent: {
          DEFAULT: "#E8B86D", // accent-500
          50: "#FDF9F3", // accent-50
          100: "#FAF0E1", // accent-100
          200: "#F5E1C3", // accent-200
          300: "#F0D2A5", // accent-300
          400: "#ECC589", // accent-400
          500: "#E8B86D", // accent-500
          600: "#BA9357", // accent-600
          700: "#8C6E41", // accent-700
          800: "#5E492B", // accent-800
          900: "#302515", // accent-900
        },
        // Background Colors
        background: "#FAFBF9", // Clean sanctuary, peaceful canvas
        surface: "#F1F4F0", // Subtle depth, gentle separation
        
        // Text Colors
        text: {
          primary: "#1A2E1A", // Clear communication, easy reading
          secondary: "#5A6B5A", // Supportive hierarchy, reduced emphasis
        },
        
        // Status Colors
        success: {
          DEFAULT: "#6B9B6B", // success-500 - Positive reinforcement, natural growth
          50: "#F2F7F2", // success-50
          100: "#E0EDE0", // success-100
          200: "#C1DBC1", // success-200
          300: "#A2C9A2", // success-300
          400: "#87B287", // success-400
          500: "#6B9B6B", // success-500
          600: "#557C55", // success-600
          700: "#3F5D3F", // success-700
          800: "#2A3E2A", // success-800
          900: "#151F15", // success-900
        },
        warning: {
          DEFAULT: "#D4A574", // warning-500 - Gentle attention, caring concern
          50: "#FBF7F2", // warning-50
          100: "#F6ECDE", // warning-100
          200: "#EDD9BD", // warning-200
          300: "#E4C69C", // warning-300
          400: "#DCB588", // warning-400
          500: "#D4A574", // warning-500
          600: "#AA845D", // warning-600
          700: "#7F6346", // warning-700
          800: "#55422F", // warning-800
          900: "#2A2118", // warning-900
        },
        error: {
          DEFAULT: "#B85A5A", // error-500 - Helpful guidance, supportive correction
          50: "#F8F2F2", // error-50
          100: "#F0DEDE", // error-100
          200: "#E1BDBD", // error-200
          300: "#D29C9C", // error-300
          400: "#C57B7B", // error-400
          500: "#B85A5A", // error-500
          600: "#934848", // error-600
          700: "#6E3636", // error-700
          800: "#4A2424", // error-800
          900: "#251212", // error-900
        },
        
        // Border Colors
        border: {
          DEFAULT: "#E1E8E1", // Minimal borders for form inputs
          light: "#F0F4F0", // Lighter border variant
        },
      },
      fontFamily: {
        // Headlines - Modern clarity that builds trust
        sans: ['Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
        
        // Body - Exceptional readability for extended content
        body: ['Source Sans 3', 'sans-serif'],
        source: ['Source Sans 3', 'sans-serif'],
        
        // Accents - Thoughtful serif moments for inspiration
        accent: ['Crimson Text', 'serif'],
        crimson: ['Crimson Text', 'serif'],
      },
      fontSize: {
        // Custom font sizes for wellness app hierarchy
        'display': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'h1': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'h2': ['2rem', { lineHeight: '1.25', letterSpacing: '-0.01em' }],
        'h3': ['1.5rem', { lineHeight: '1.3' }],
        'h4': ['1.25rem', { lineHeight: '1.4' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        'caption': ['0.75rem', { lineHeight: '1.4' }],
      },
      spacing: {
        // Custom spacing for organic layouts
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        // Organic border radius values
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      boxShadow: {
        // Organic shadow system
        'organic': '0 4px 20px rgba(45, 90, 74, 0.08)',
        'organic-lg': '0 8px 32px rgba(45, 90, 74, 0.12)',
        'subtle': '0 2px 8px rgba(45, 90, 74, 0.04)',
        'mood': '0 6px 24px rgba(123, 160, 91, 0.1)',
      },
      animation: {
        // Gentle animations for emotional validation
        'gentle-fade': 'gentleFade 300ms ease-out',
        'mood-shift': 'moodShift 400ms ease-out',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        gentleFade: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        moodShift: {
          '0%': { transform: 'scale(0.98)', opacity: '0.8' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      transitionDuration: {
        // Custom transition durations for wellness interactions
        '300': '300ms',
        '400': '400ms',
      },
      transitionTimingFunction: {
        // Gentle easing functions
        'gentle': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'mood': 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
    },
  },
  plugins: [],
}
