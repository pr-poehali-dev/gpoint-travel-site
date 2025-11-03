import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const destinations = [
    {
      name: 'Франция',
      description: 'Романтика Парижа, замки Луары, Лазурный берег',
      icon: '🇫🇷',
      highlights: ['Эйфелева башня', 'Версаль', 'Канны']
    },
    {
      name: 'Италия',
      description: 'Вечный Рим, венецианские каналы, тосканские холмы',
      icon: '🇮🇹',
      highlights: ['Колизей', 'Венеция', 'Флоренция']
    },
    {
      name: 'Швейцария',
      description: 'Альпийские вершины, изысканные курорты, кристальные озёра',
      icon: '🇨🇭',
      highlights: ['Церматт', 'Люцерн', 'Женева']
    },
    {
      name: 'Испания',
      description: 'Барселона Гауди, мадридские музеи, андалузская страсть',
      icon: '🇪🇸',
      highlights: ['Саграда Фамилия', 'Прадо', 'Альгамбра']
    }
  ];

  const tours = [
    {
      title: 'Гранд тур по Европе',
      duration: '14 дней',
      price: 'от 450 000 ₽',
      description: 'Роскошное путешествие по столицам Европы'
    },
    {
      title: 'Альпийская мечта',
      duration: '10 дней',
      price: 'от 380 000 ₽',
      description: 'Эксклюзивные горнолыжные курорты'
    },
    {
      title: 'Средиземноморская одиссея',
      duration: '12 дней',
      price: 'от 520 000 ₽',
      description: 'Яхтенное путешествие вдоль побережья'
    }
  ];

  const faqs = [
    {
      question: 'Как забронировать индивидуальный тур?',
      answer: 'Оставьте заявку через форму на сайте или свяжитесь с нашим консьерж-сервисом. Мы разработаем маршрут с учётом ваших предпочтений в течение 24 часов.'
    },
    {
      question: 'Какие услуги входят в стоимость?',
      answer: 'Все туры включают проживание в отелях категории 5*, трансферы на премиум-автомобилях, услуги личного гида-сопровождающего и круглосуточную поддержку.'
    },
    {
      question: 'Возможна ли отмена бронирования?',
      answer: 'Да, мы предлагаем гибкие условия отмены. При отмене за 30+ дней возвращается 100% стоимости, за 14-29 дней — 75%, за 7-13 дней — 50%.'
    },
    {
      question: 'Оформляете ли вы визы?',
      answer: 'Да, мы берём на себя полное сопровождение визового процесса, включая подготовку документов и запись в консульства.'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2">
              <Icon name="Globe" className="text-primary" size={32} />
              <span className="text-2xl font-bold text-secondary">G.Point.Travel</span>
            </div>
            <div className="hidden md:flex space-x-8">
              {['home', 'tours', 'destinations', 'booking', 'about', 'faq', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-medium transition-colors hover:text-primary ${
                    activeSection === section ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'tours' && 'Туры'}
                  {section === 'destinations' && 'Направления'}
                  {section === 'booking' && 'Бронирование'}
                  {section === 'about' && 'О компании'}
                  {section === 'faq' && 'FAQ'}
                  {section === 'contacts' && 'Контакты'}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-20 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://cdn.poehali.dev/projects/6160ba56-bd52-4a2a-923b-2e46f647791d/files/e1990241-e8b5-42b3-be15-d1b69a830703.jpg"
            alt="Luxury European Travel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-secondary/80 via-secondary/70 to-secondary/60"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="text-center animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Путешествия<br />вашей мечты
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light">
              Эксклюзивные туры по Европе от премиального агентства G.Point.Travel
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                onClick={() => scrollToSection('tours')}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg"
              >
                Выбрать тур
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('booking')}
                className="bg-white/10 backdrop-blur-sm border-white text-white hover:bg-white/20 px-8 py-6 text-lg"
              >
                Индивидуальное бронирование
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="destinations" className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-5xl font-bold text-secondary mb-4">Направления</h2>
            <p className="text-xl text-muted-foreground">Откройте для себя лучшие места Европы</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {destinations.map((dest, idx) => (
              <Card key={idx} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-border/50">
                <CardHeader>
                  <div className="text-6xl mb-4 text-center">{dest.icon}</div>
                  <CardTitle className="text-2xl text-center">{dest.name}</CardTitle>
                  <CardDescription className="text-center">{dest.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {dest.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <Icon name="MapPin" size={16} className="text-primary" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="tours" className="py-24 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-secondary mb-4">Готовые туры</h2>
            <p className="text-xl text-muted-foreground">Тщательно разработанные маршруты для искушённых путешественников</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {tours.map((tour, idx) => (
              <Card key={idx} className="hover:shadow-2xl transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl">{tour.title}</CardTitle>
                  <CardDescription className="text-lg">{tour.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Icon name="Clock" size={20} className="text-primary" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="text-3xl font-bold text-primary">{tour.price}</div>
                  <Button className="w-full" onClick={() => scrollToSection('booking')}>
                    Забронировать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-secondary mb-4">Бронирование</h2>
            <p className="text-xl text-muted-foreground">Расскажите о вашей мечте — мы воплотим её в реальность</p>
          </div>
          <Card className="shadow-2xl">
            <CardHeader>
              <CardTitle className="text-2xl">Индивидуальный запрос</CardTitle>
              <CardDescription>Наш консьерж-сервис свяжется с вами в течение часа</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Имя</Label>
                  <Input id="name" placeholder="Ваше имя" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Телефон</Label>
                  <Input id="phone" type="tel" placeholder="+7 (___) ___-__-__" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="email@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="destination">Желаемое направление</Label>
                <Input id="destination" placeholder="Франция, Италия..." />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="dates">Желаемые даты</Label>
                  <Input id="dates" placeholder="Июнь 2024" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="budget">Бюджет</Label>
                  <Input id="budget" placeholder="от 500 000 ₽" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="wishes">Ваши пожелания</Label>
                <Textarea
                  id="wishes"
                  placeholder="Расскажите о своих предпочтениях: интересы, стиль путешествия, особые требования..."
                  className="min-h-32"
                />
              </div>
              <Button className="w-full" size="lg">
                Отправить запрос
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="about" className="py-24 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold text-secondary mb-8">О компании</h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              <span className="font-semibold text-secondary">G.Point.Travel</span> — премиальное туристическое агентство,
              специализирующееся на организации эксклюзивных путешествий по Европе.
            </p>
            <p>
              Мы создаём не просто туры, а уникальные впечатления, основанные на глубоком понимании культуры,
              истории и современной жизни европейских стран.
            </p>
            <p>
              Наша команда — это профессионалы с многолетним опытом, которые лично знают каждый маршрут
              и поддерживают партнёрские отношения с лучшими отелями, ресторанами и культурными площадками.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="space-y-2">
              <div className="text-5xl font-bold text-primary">12+</div>
              <div className="text-muted-foreground">лет опыта</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold text-primary">2000+</div>
              <div className="text-muted-foreground">довольных клиентов</div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold text-primary">4</div>
              <div className="text-muted-foreground">страны</div>
            </div>
          </div>
        </div>
      </section>

      <section id="faq" className="py-24 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-bold text-secondary mb-4">Вопросы и ответы</h2>
            <p className="text-xl text-muted-foreground">Ответы на часто задаваемые вопросы</p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border rounded-lg px-6 bg-card">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="contacts" className="py-24 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Контакты</h2>
            <p className="text-xl text-white/80">Мы всегда на связи</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <Icon name="Phone" size={48} className="mx-auto text-primary" />
              <h3 className="text-2xl font-semibold">Телефон</h3>
              <p className="text-white/90 text-lg">+7 (495) 123-45-67</p>
              <p className="text-white/70">Ежедневно, 9:00 - 21:00</p>
            </div>
            <div className="space-y-4">
              <Icon name="Mail" size={48} className="mx-auto text-primary" />
              <h3 className="text-2xl font-semibold">Email</h3>
              <p className="text-white/90 text-lg">info@gpointtravel.ru</p>
              <p className="text-white/70">Ответим в течение часа</p>
            </div>
            <div className="space-y-4">
              <Icon name="MapPin" size={48} className="mx-auto text-primary" />
              <h3 className="text-2xl font-semibold">Офис</h3>
              <p className="text-white/90 text-lg">Москва, Кутузовский проспект, 36</p>
              <p className="text-white/70">Пн-Пт, 10:00 - 19:00</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-secondary/95 text-white/60 py-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center space-x-2">
              <Icon name="Globe" className="text-primary" size={24} />
              <span className="text-lg font-semibold text-white">G.Point.Travel</span>
            </div>
            <p className="text-sm">© 2024 G.Point.Travel. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}