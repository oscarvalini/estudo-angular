import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Dicionario } from './dicionario-cadastro/dicionario.inteface';
import { Palavra } from './dicionario-cadastro/palavra.interface';

export class DataService implements InMemoryDbService {
  
    createDb() {
        let palavras: Palavra[] = [
           
                { id: 1,
                  codigo: 1,
                  codigo_dicionario: 2,
                  texto: 'Americana',
                  definicao:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur laoreet turpis, id elementum eros tristique sit amet. Curabitur dolor nunc, viverra vitae felis in, commodo finibus tellus. Donec lorem purus, convallis et nunc et, fermentum malesuada massa. Aliquam erat volutpat. In tincidunt molestie feugiat. Proin sed enim ut lorem luctus iaculis. Pellentesque ornare consectetur metus eu auctor. Morbi eget fermentum metus, ac molestie elit. Nulla cursus ligula eget lectus tincidunt dapibus. Quisque vel aliquet nulla.',
                  definicao_extra:
                    'Sed vel tincidunt nisl. Fusce auctor iaculis vehicula. Cras ultrices in mauris at sodales. Aenean et augue sit amet nibh posuere cursus vitae non orci. Phasellus mattis luctus suscipit. Praesent sed turpis eget ipsum varius rhoncus id imperdiet urna. Etiam nibh nisl, dictum eget maximus vel, aliquam at lacus. Quisque quis vestibulum elit. Nullam varius vulputate euismod. Sed ultricies nulla et orci condimentum suscipit. Maecenas venenatis auctor sem, a laoreet nunc fermentum non. Mauris eleifend ipsum sit amet sapien placerat, id viverra elit ornare. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum euismod sed diam eu rutrum. Etiam laoreet ullamcorper enim.\nMauris in feugiat turpis, vel mollis mi. Fusce eget nunc leo. Vestibulum dolor orci, sollicitudin sed ornare sed, fringilla quis libero. Nullam tincidunt convallis suscipit. Sed quis justo non lectus auctor iaculis a non ante. In in libero sed nibh luctus ultrices ac eget velit. Duis quis quam arcu. Duis ut dolor at ipsum mattis luctus ut sit amet libero. Aliquam tortor augue, sollicitudin at ante et, tempus dignissim arcu. Maecenas eu malesuada metus. Quisque dui ex, pretium vel felis vitae, mattis sagittis libero. Aliquam eu sem eget ante dignissim bibendum.\nEtiam pretium, augue sed luctus venenatis, mi mi iaculis elit, sed malesuada mauris urna in sem. Donec vestibulum nulla a fermentum sollicitudin. Donec id posuere ipsum. Integer eu dolor sit amet turpis dapibus viverra vitae fringilla tortor. Etiam gravida dignissim augue. Sed ac lacinia diam, vitae ultricies sem. Pellentesque et ipsum condimentum, scelerisque tortor vitae, scelerisque magna. In molestie elit vel aliquet finibus. Nullam dignissim aliquet porttitor. Mauris in enim ornare, ullamcorper lorem non, imperdiet metus.',
                },
                { id: 2,
                  codigo: 2,
                  codigo_dicionario: 2,
                  texto: 'Alumínio',
                  definicao:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur laoreet turpis, id elementum eros tristique sit amet. Curabitur dolor nunc, viverra vitae felis in, commodo finibus tellus. Donec lorem purus, convallis et nunc et, fermentum malesuada massa. Aliquam erat volutpat. In tincidunt molestie feugiat. Proin sed enim ut lorem luctus iaculis. Pellentesque ornare consectetur metus eu auctor. Morbi eget fermentum metus, ac molestie elit. Nulla cursus ligula eget lectus tincidunt dapibus. Quisque vel aliquet nulla.',
                  definicao_extra:
                    'Sed vel tincidunt nisl. Fusce auctor iaculis vehicula. Cras ultrices in mauris at sodales. Aenean et augue sit amet nibh posuere cursus vitae non orci. Phasellus mattis luctus suscipit. Praesent sed turpis eget ipsum varius rhoncus id imperdiet urna. Etiam nibh nisl, dictum eget maximus vel, aliquam at lacus. Quisque quis vestibulum elit. Nullam varius vulputate euismod. Sed ultricies nulla et orci condimentum suscipit. Maecenas venenatis auctor sem, a laoreet nunc fermentum non. Mauris eleifend ipsum sit amet sapien placerat, id viverra elit ornare. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum euismod sed diam eu rutrum. Etiam laoreet ullamcorper enim.\nMauris in feugiat turpis, vel mollis mi. Fusce eget nunc leo. Vestibulum dolor orci, sollicitudin sed ornare sed, fringilla quis libero. Nullam tincidunt convallis suscipit. Sed quis justo non lectus auctor iaculis a non ante. In in libero sed nibh luctus ultrices ac eget velit. Duis quis quam arcu. Duis ut dolor at ipsum mattis luctus ut sit amet libero. Aliquam tortor augue, sollicitudin at ante et, tempus dignissim arcu. Maecenas eu malesuada metus. Quisque dui ex, pretium vel felis vitae, mattis sagittis libero. Aliquam eu sem eget ante dignissim bibendum.\nEtiam pretium, augue sed luctus venenatis, mi mi iaculis elit, sed malesuada mauris urna in sem. Donec vestibulum nulla a fermentum sollicitudin. Donec id posuere ipsum. Integer eu dolor sit amet turpis dapibus viverra vitae fringilla tortor. Etiam gravida dignissim augue. Sed ac lacinia diam, vitae ultricies sem. Pellentesque et ipsum condimentum, scelerisque tortor vitae, scelerisque magna. In molestie elit vel aliquet finibus. Nullam dignissim aliquet porttitor. Mauris in enim ornare, ullamcorper lorem non, imperdiet metus.',
                },
                { id: 3,
                  codigo: 3,
                  codigo_dicionario: 2,
                  texto: 'A',
                  definicao:
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur laoreet turpis, id elementum eros tristique sit amet. Curabitur dolor nunc, viverra vitae felis in, commodo finibus tellus. Donec lorem purus, convallis et nunc et, fermentum malesuada massa. Aliquam erat volutpat. In tincidunt molestie feugiat. Proin sed enim ut lorem luctus iaculis. Pellentesque ornare consectetur metus eu auctor. Morbi eget fermentum metus, ac molestie elit. Nulla cursus ligula eget lectus tincidunt dapibus. Quisque vel aliquet nulla.',
                  definicao_extra:
                    'Sed vel tincidunt nisl. Fusce auctor iaculis vehicula. Cras ultrices in mauris at sodales. Aenean et augue sit amet nibh posuere cursus vitae non orci. Phasellus mattis luctus suscipit. Praesent sed turpis eget ipsum varius rhoncus id imperdiet urna. Etiam nibh nisl, dictum eget maximus vel, aliquam at lacus. Quisque quis vestibulum elit. Nullam varius vulputate euismod. Sed ultricies nulla et orci condimentum suscipit. Maecenas venenatis auctor sem, a laoreet nunc fermentum non. Mauris eleifend ipsum sit amet sapien placerat, id viverra elit ornare. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum euismod sed diam eu rutrum. Etiam laoreet ullamcorper enim.\nMauris in feugiat turpis, vel mollis mi. Fusce eget nunc leo. Vestibulum dolor orci, sollicitudin sed ornare sed, fringilla quis libero. Nullam tincidunt convallis suscipit. Sed quis justo non lectus auctor iaculis a non ante. In in libero sed nibh luctus ultrices ac eget velit. Duis quis quam arcu. Duis ut dolor at ipsum mattis luctus ut sit amet libero. Aliquam tortor augue, sollicitudin at ante et, tempus dignissim arcu. Maecenas eu malesuada metus. Quisque dui ex, pretium vel felis vitae, mattis sagittis libero. Aliquam eu sem eget ante dignissim bibendum.\nEtiam pretium, augue sed luctus venenatis, mi mi iaculis elit, sed malesuada mauris urna in sem. Donec vestibulum nulla a fermentum sollicitudin. Donec id posuere ipsum. Integer eu dolor sit amet turpis dapibus viverra vitae fringilla tortor. Etiam gravida dignissim augue. Sed ac lacinia diam, vitae ultricies sem. Pellentesque et ipsum condimentum, scelerisque tortor vitae, scelerisque magna. In molestie elit vel aliquet finibus. Nullam dignissim aliquet porttitor. Mauris in enim ornare, ullamcorper lorem non, imperdiet metus.',
                },
                { id: 4,
                  codigo: 4,
                  codigo_dicionario: 2,
                  texto: 'Dicionario',
                  definicao:
                    'Id elementum eros tristique sit amet. Curabitur dolor nunc, viverra vitae felis in, commodo finibus tellus. Donec lorem purus, convallis et nunc et, fermentum malesuada massa. Aliquam erat volutpat. In tincidunt molestie feugiat. Proin sed enim ut lorem luctus iaculis. Pellentesque ornare consectetur metus eu auctor. Morbi eget fermentum metus, ac molestie elit. Nulla cursus ligula eget lectus tincidunt dapibus. Quisque vel aliquet nulla.',
                  definicao_extra:
                    'Phasellus mattis luctus suscipit. Praesent sed turpis eget ipsum varius rhoncus id imperdiet urna. Etiam nibh nisl, dictum eget maximus vel, aliquam at lacus. Quisque quis vestibulum elit. Nullam varius vulputate euismod. Sed ultricies nulla et orci condimentum suscipit. Maecenas venenatis auctor sem, a laoreet nunc fermentum non. Mauris eleifend ipsum sit amet sapien placerat, id viverra elit ornare. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum euismod sed diam eu rutrum. Etiam laoreet ullamcorper enim.\nMauris in feugiat turpis, vel mollis mi. Fusce eget nunc leo. Vestibulum dolor orci, sollicitudin sed ornare sed, fringilla quis libero. Nullam tincidunt convallis suscipit. Sed quis justo non lectus auctor iaculis a non ante. In in libero sed nibh luctus ultrices ac eget velit. Duis quis quam arcu. Duis ut dolor at ipsum mattis luctus ut sit amet libero. Aliquam tortor augue, sollicitudin at ante et, tempus dignissim arcu. Maecenas eu malesuada metus. Quisque dui ex, pretium vel felis vitae, mattis sagittis libero. Aliquam eu sem eget ante dignissim bibendum.\nEtiam pretium, augue sed luctus venenatis, mi mi iaculis elit, sed malesuada mauris urna in sem. Donec vestibulum nulla a fermentum sollicitudin. Donec id posuere ipsum. Integer eu dolor sit amet turpis dapibus viverra vitae fringilla tortor. Etiam gravida dignissim augue. Sed ac lacinia diam, vitae ultricies sem. Pellentesque et ipsum condimentum, scelerisque tortor vitae, scelerisque magna. In molestie elit vel aliquet finibus. Nullam dignissim aliquet porttitor. Mauris in enim ornare, ullamcorper lorem non, imperdiet metus.',
                },
                { id: 5,
                  codigo: 5,
                  codigo_dicionario: 2,
                  texto: 'Damasco',
                  definicao:
                    ' felis in, commodo finibus tellus. Donec lorem purus, convallis et nunc et, fermentum malesuada massa. Aliquam erat volutpat. In tincidunt molestie feugiat. Proin sed enim ut lorem luctus iaculis. Pellentesque ornare consectetur metus eu auctor. Morbi eget fermentum metus, ac molestie elit. Nulla cursus ligula eget lectus tincidunt dapibus. Quisque vel aliquet nulla.',
                  definicao_extra:
                    'Sed vel tincidunt nisl. Fusce auctor iaculis vehicula. Cras ultrices in mauris at sodales. Aenean et augue sit amet nibh posuere cursus vitae non orci. Phasellus mattis luctus suscipit. Praesent sed turpis eget ipsum varius rhoncus id imperdiet urna. Etiam nibh nisl, dictum eget maximus vel, aliquam at lacus. Quisque quis vestibulum elit. Nullam varius vulputate euismod. Sed ultricies nulla et orci condimentum suscipit. Maecenas venenatis auctor sem, a laoreet nunc fermentum non. Mauris eleifend ipsum sit amet sapien placerat, id viverra elit ornare. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum euismod sed diam eu rutrum. Etiam laoreet ullamcorper enim.\nMauris in feugiat turpis, vel mollis mi. Fusce eget nunc leo. Vestibulum dolor orci, sollicitudin sed ornare sed, fringilla quis libero. Nullam tincidunt convallis suscipit. Sed quis justo non lectus auctor iaculis a non ante. In in libero sed nibh luctus ultrices ac eget velit. Duis quis quam arcu. Duis ut dolor at ipsum mattis luctus ut sit amet libero. Aliquam tortor augue, sollicitudin at ante et, tempus dignissim arcu. Maecenas eu malesuada metus. Quisque dui ex, pretium vel felis vitae, mattis sagittis libero. Aliquam eu sem eget ante dignissim bibendum.\nEtiam pretium, augue sed luctus venenatis, mi mi iaculis elit, sed malesuada mauris urna in sem. Donec vestibulum nulla a fermentum sollicitudin. Donec id posuere ipsum. Integer eu dolor sit amet turpis dapibus viverra vitae fringilla tortor. Etiam gravida dignissim augue. Sed ac lacinia diam, vitae ultricies sem. Pellentesque et ipsum condimentum, scelerisque tortor vitae, scelerisque magna. In molestie elit vel aliquet finibus. Nullam dignissim aliquet porttitor. Mauris in enim ornare, ullamcorper lorem non, imperdiet metus.',
                },
                { id: 6,
                  codigo: 6,
                  codigo_dicionario: 2,
                  texto: 'Dipirona',
                  definicao: 'tincidunt dapibus. Quisque vel aliquet nulla.',
                  definicao_extra:
                    'Sed vel tincidunt nisl. Fusce auctor iaculis vehicula. Cras ultrices in mauris at sodales. Aenean et augue sit amet nibh posuere cursus vitae non orci. Phasellus mattis luctus suscipit. Praesent sed turpis eget ipsum varius rhoncus id imperdiet urna. Etiam nibh nisl, dictum eget maximus vel, aliquam at lacus. Quisque quis vestibulum elit. Nullam varius vulputate euismod. Sed ultricies nulla et orci condimentum suscipit. Maecenas venenatis auctor sem, a laoreet nunc fermentum non. Mauris eleifend ipsum sit amet sapien placerat, id viverra elit ornare. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum euismod sed diam eu rutrum. Etiam laoreet ullamcorper enim.\nMauris in feugiat turpis, vel mollis mi. Fusce eget nunc leo. Vestibulum dolor orci, sollicitudin sed ornare sed, fringilla quis libero. Nullam tincidunt convallis suscipit. Sed quis justo non lectus auctor iaculis a non ante. In in libero sed nibh luctus ultrices ac eget velit. Duis quis quam arcu. Duis ut dolor at ipsum mattis luctus ut sit amet libero. Aliquam tortor augue, sollicitudin at ante et, tempus dignissim arcu. Maecenas eu malesuada metus. Quisque dui ex, pretium vel felis vitae, mattis sagittis libero. Aliquam eu sem eget ante dignissim bibendum.\nEtiam pretium, augue sed luctus venenatis, mi mi iaculis elit, sed malesuada mauris urna in sem. Donec vestibulum nulla a fermentum sollicitudin. Donec id posuere ipsum. Integer eu dolor sit amet turpis dapibus viverra vitae fringilla tortor. Etiam gravida dignissim augue. Sed ac lacinia diam, vitae ultricies sem. Pellentesque et ipsum condimentum, scelerisque tortor vitae, scelerisque magna. In molestie elit vel aliquet finibus. Nullam dignissim aliquet porttitor. Mauris in enim ornare, ullamcorper lorem non, imperdiet metus.',
                },
                {
                    codigo: 7,
                    id: 7,
                    codigo_dicionario: 1,
                    texto: 'América',
                    definicao:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur laoreet turpis, id elementum eros tristique sit amet. Curabitur dolor nunc, viverra vitae felis in, commodo finibus tellus. Donec lorem purus, convallis et nunc et, fermentum malesuada massa. Aliquam erat volutpat. In tincidunt molestie feugiat. Proin sed enim ut lorem luctus iaculis. Pellentesque ornare consectetur metus eu auctor. Morbi eget fermentum metus, ac molestie elit. Nulla cursus ligula eget lectus tincidunt dapibus. Quisque vel aliquet nulla.',
                    definicao_extra:
                      'Sed vel tincidunt nisl. Fusce auctor iaculis vehicula. Cras ultrices in mauris at sodales. Aenean et augue sit amet nibh posuere cursus vitae non orci. Phasellus mattis luctus suscipit. Praesent sed turpis eget ipsum varius rhoncus id imperdiet urna. Etiam nibh nisl, dictum eget maximus vel, aliquam at lacus. Quisque quis vestibulum elit. Nullam varius vulputate euismod. Sed ultricies nulla et orci condimentum suscipit. Maecenas venenatis auctor sem, a laoreet nunc fermentum non. Mauris eleifend ipsum sit amet sapien placerat, id viverra elit ornare. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum euismod sed diam eu rutrum. Etiam laoreet ullamcorper enim.\nMauris in feugiat turpis, vel mollis mi. Fusce eget nunc leo. Vestibulum dolor orci, sollicitudin sed ornare sed, fringilla quis libero. Nullam tincidunt convallis suscipit. Sed quis justo non lectus auctor iaculis a non ante. In in libero sed nibh luctus ultrices ac eget velit. Duis quis quam arcu. Duis ut dolor at ipsum mattis luctus ut sit amet libero. Aliquam tortor augue, sollicitudin at ante et, tempus dignissim arcu. Maecenas eu malesuada metus. Quisque dui ex, pretium vel felis vitae, mattis sagittis libero. Aliquam eu sem eget ante dignissim bibendum.\nEtiam pretium, augue sed luctus venenatis, mi mi iaculis elit, sed malesuada mauris urna in sem. Donec vestibulum nulla a fermentum sollicitudin. Donec id posuere ipsum. Integer eu dolor sit amet turpis dapibus viverra vitae fringilla tortor. Etiam gravida dignissim augue. Sed ac lacinia diam, vitae ultricies sem. Pellentesque et ipsum condimentum, scelerisque tortor vitae, scelerisque magna. In molestie elit vel aliquet finibus. Nullam dignissim aliquet porttitor. Mauris in enim ornare, ullamcorper lorem non, imperdiet metus.',
                  },
                  {
                    codigo: 8,
                    id: 8,
                    codigo_dicionario: 1,
                    texto: 'Banana',
                    definicao:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur laoreet turpis, id elementum eros tristique sit amet. Curabitur dolor nunc, viverra vitae felis in, commodo finibus tellus. Donec lorem purus, convallis et nunc et, fermentum malesuada massa. Aliquam erat volutpat. In tincidunt molestie feugiat. Proin sed enim ut lorem luctus iaculis. Pellentesque ornare consectetur metus eu auctor. Morbi eget fermentum metus, ac molestie elit. Nulla cursus ligula eget lectus tincidunt dapibus. Quisque vel aliquet nulla.',
                    definicao_extra:
                      'Sed vel tincidunt nisl. Fusce auctor iaculis vehicula. Cras ultrices in mauris at sodales. Aenean et augue sit amet nibh posuere cursus vitae non orci. Phasellus mattis luctus suscipit. Praesent sed turpis eget ipsum varius rhoncus id imperdiet urna. Etiam nibh nisl, dictum eget maximus vel, aliquam at lacus. Quisque quis vestibulum elit. Nullam varius vulputate euismod. Sed ultricies nulla et orci condimentum suscipit. Maecenas venenatis auctor sem, a laoreet nunc fermentum non. Mauris eleifend ipsum sit amet sapien placerat, id viverra elit ornare. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum euismod sed diam eu rutrum. Etiam laoreet ullamcorper enim.\nMauris in feugiat turpis, vel mollis mi. Fusce eget nunc leo. Vestibulum dolor orci, sollicitudin sed ornare sed, fringilla quis libero. Nullam tincidunt convallis suscipit. Sed quis justo non lectus auctor iaculis a non ante. In in libero sed nibh luctus ultrices ac eget velit. Duis quis quam arcu. Duis ut dolor at ipsum mattis luctus ut sit amet libero. Aliquam tortor augue, sollicitudin at ante et, tempus dignissim arcu. Maecenas eu malesuada metus. Quisque dui ex, pretium vel felis vitae, mattis sagittis libero. Aliquam eu sem eget ante dignissim bibendum.\nEtiam pretium, augue sed luctus venenatis, mi mi iaculis elit, sed malesuada mauris urna in sem. Donec vestibulum nulla a fermentum sollicitudin. Donec id posuere ipsum. Integer eu dolor sit amet turpis dapibus viverra vitae fringilla tortor. Etiam gravida dignissim augue. Sed ac lacinia diam, vitae ultricies sem. Pellentesque et ipsum condimentum, scelerisque tortor vitae, scelerisque magna. In molestie elit vel aliquet finibus. Nullam dignissim aliquet porttitor. Mauris in enim ornare, ullamcorper lorem non, imperdiet metus.',
                  },
                  { id: 9,
                    codigo: 9,
                    codigo_dicionario: 1,
                    texto: 'Cabelo',
                    definicao:
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis consectetur laoreet turpis, id elementum eros tristique sit amet. Curabitur dolor nunc, viverra vitae felis in, commodo finibus tellus. Donec lorem purus, convallis et nunc et, fermentum malesuada massa. Aliquam erat volutpat. In tincidunt molestie feugiat. Proin sed enim ut lorem luctus iaculis. Pellentesque ornare consectetur metus eu auctor. Morbi eget fermentum metus, ac molestie elit. Nulla cursus ligula eget lectus tincidunt dapibus. Quisque vel aliquet nulla.',
                    definicao_extra:
                      'Sed vel tincidunt nisl. Fusce auctor iaculis vehicula. Cras ultrices in mauris at sodales. Aenean et augue sit amet nibh posuere cursus vitae non orci. Phasellus mattis luctus suscipit. Praesent sed turpis eget ipsum varius rhoncus id imperdiet urna. Etiam nibh nisl, dictum eget maximus vel, aliquam at lacus. Quisque quis vestibulum elit. Nullam varius vulputate euismod. Sed ultricies nulla et orci condimentum suscipit. Maecenas venenatis auctor sem, a laoreet nunc fermentum non. Mauris eleifend ipsum sit amet sapien placerat, id viverra elit ornare. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum euismod sed diam eu rutrum. Etiam laoreet ullamcorper enim.\nMauris in feugiat turpis, vel mollis mi. Fusce eget nunc leo. Vestibulum dolor orci, sollicitudin sed ornare sed, fringilla quis libero. Nullam tincidunt convallis suscipit. Sed quis justo non lectus auctor iaculis a non ante. In in libero sed nibh luctus ultrices ac eget velit. Duis quis quam arcu. Duis ut dolor at ipsum mattis luctus ut sit amet libero. Aliquam tortor augue, sollicitudin at ante et, tempus dignissim arcu. Maecenas eu malesuada metus. Quisque dui ex, pretium vel felis vitae, mattis sagittis libero. Aliquam eu sem eget ante dignissim bibendum.\nEtiam pretium, augue sed luctus venenatis, mi mi iaculis elit, sed malesuada mauris urna in sem. Donec vestibulum nulla a fermentum sollicitudin. Donec id posuere ipsum. Integer eu dolor sit amet turpis dapibus viverra vitae fringilla tortor. Etiam gravida dignissim augue. Sed ac lacinia diam, vitae ultricies sem. Pellentesque et ipsum condimentum, scelerisque tortor vitae, scelerisque magna. In molestie elit vel aliquet finibus. Nullam dignissim aliquet porttitor. Mauris in enim ornare, ullamcorper lorem non, imperdiet metus.',
                  },
                  { id: 10,
                    codigo: 10,
                    codigo_dicionario: 3,
                    texto: 'Dicionario',
                    definicao:
                      'Id elementum eros tristique sit amet. Curabitur dolor nunc, viverra vitae felis in, commodo finibus tellus. Donec lorem purus, convallis et nunc et, fermentum malesuada massa. Aliquam erat volutpat. In tincidunt molestie feugiat. Proin sed enim ut lorem luctus iaculis. Pellentesque ornare consectetur metus eu auctor. Morbi eget fermentum metus, ac molestie elit. Nulla cursus ligula eget lectus tincidunt dapibus. Quisque vel aliquet nulla.',
                    definicao_extra:
                      'Phasellus mattis luctus suscipit. Praesent sed turpis eget ipsum varius rhoncus id imperdiet urna. Etiam nibh nisl, dictum eget maximus vel, aliquam at lacus. Quisque quis vestibulum elit. Nullam varius vulputate euismod. Sed ultricies nulla et orci condimentum suscipit. Maecenas venenatis auctor sem, a laoreet nunc fermentum non. Mauris eleifend ipsum sit amet sapien placerat, id viverra elit ornare. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum euismod sed diam eu rutrum. Etiam laoreet ullamcorper enim.\nMauris in feugiat turpis, vel mollis mi. Fusce eget nunc leo. Vestibulum dolor orci, sollicitudin sed ornare sed, fringilla quis libero. Nullam tincidunt convallis suscipit. Sed quis justo non lectus auctor iaculis a non ante. In in libero sed nibh luctus ultrices ac eget velit. Duis quis quam arcu. Duis ut dolor at ipsum mattis luctus ut sit amet libero. Aliquam tortor augue, sollicitudin at ante et, tempus dignissim arcu. Maecenas eu malesuada metus. Quisque dui ex, pretium vel felis vitae, mattis sagittis libero. Aliquam eu sem eget ante dignissim bibendum.\nEtiam pretium, augue sed luctus venenatis, mi mi iaculis elit, sed malesuada mauris urna in sem. Donec vestibulum nulla a fermentum sollicitudin. Donec id posuere ipsum. Integer eu dolor sit amet turpis dapibus viverra vitae fringilla tortor. Etiam gravida dignissim augue. Sed ac lacinia diam, vitae ultricies sem. Pellentesque et ipsum condimentum, scelerisque tortor vitae, scelerisque magna. In molestie elit vel aliquet finibus. Nullam dignissim aliquet porttitor. Mauris in enim ornare, ullamcorper lorem non, imperdiet metus.',
                  },
                  { id: 11,
                    codigo: 11,
                    codigo_dicionario: 3,
                    texto: 'Damasco',
                    definicao:
                      ' felis in, commodo finibus tellus. Donec lorem purus, convallis et nunc et, fermentum malesuada massa. Aliquam erat volutpat. In tincidunt molestie feugiat. Proin sed enim ut lorem luctus iaculis. Pellentesque ornare consectetur metus eu auctor. Morbi eget fermentum metus, ac molestie elit. Nulla cursus ligula eget lectus tincidunt dapibus. Quisque vel aliquet nulla.',
                    definicao_extra:
                      'Sed vel tincidunt nisl. Fusce auctor iaculis vehicula. Cras ultrices in mauris at sodales. Aenean et augue sit amet nibh posuere cursus vitae non orci. Phasellus mattis luctus suscipit. Praesent sed turpis eget ipsum varius rhoncus id imperdiet urna. Etiam nibh nisl, dictum eget maximus vel, aliquam at lacus. Quisque quis vestibulum elit. Nullam varius vulputate euismod. Sed ultricies nulla et orci condimentum suscipit. Maecenas venenatis auctor sem, a laoreet nunc fermentum non. Mauris eleifend ipsum sit amet sapien placerat, id viverra elit ornare. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum euismod sed diam eu rutrum. Etiam laoreet ullamcorper enim.\nMauris in feugiat turpis, vel mollis mi. Fusce eget nunc leo. Vestibulum dolor orci, sollicitudin sed ornare sed, fringilla quis libero. Nullam tincidunt convallis suscipit. Sed quis justo non lectus auctor iaculis a non ante. In in libero sed nibh luctus ultrices ac eget velit. Duis quis quam arcu. Duis ut dolor at ipsum mattis luctus ut sit amet libero. Aliquam tortor augue, sollicitudin at ante et, tempus dignissim arcu. Maecenas eu malesuada metus. Quisque dui ex, pretium vel felis vitae, mattis sagittis libero. Aliquam eu sem eget ante dignissim bibendum.\nEtiam pretium, augue sed luctus venenatis, mi mi iaculis elit, sed malesuada mauris urna in sem. Donec vestibulum nulla a fermentum sollicitudin. Donec id posuere ipsum. Integer eu dolor sit amet turpis dapibus viverra vitae fringilla tortor. Etiam gravida dignissim augue. Sed ac lacinia diam, vitae ultricies sem. Pellentesque et ipsum condimentum, scelerisque tortor vitae, scelerisque magna. In molestie elit vel aliquet finibus. Nullam dignissim aliquet porttitor. Mauris in enim ornare, ullamcorper lorem non, imperdiet metus.',
                  },
                  { id: 12,
                    codigo: 12,
                    codigo_dicionario: 3,
                    texto: 'Dipirona',
                    definicao: 'tincidunt dapibus. Quisque vel aliquet nulla.',
                    definicao_extra:
                      'Sed vel tincidunt nisl. Fusce auctor iaculis vehicula. Cras ultrices in mauris at sodales. Aenean et augue sit amet nibh posuere cursus vitae non orci. Phasellus mattis luctus suscipit. Praesent sed turpis eget ipsum varius rhoncus id imperdiet urna. Etiam nibh nisl, dictum eget maximus vel, aliquam at lacus. Quisque quis vestibulum elit. Nullam varius vulputate euismod. Sed ultricies nulla et orci condimentum suscipit. Maecenas venenatis auctor sem, a laoreet nunc fermentum non. Mauris eleifend ipsum sit amet sapien placerat, id viverra elit ornare. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum euismod sed diam eu rutrum. Etiam laoreet ullamcorper enim.\nMauris in feugiat turpis, vel mollis mi. Fusce eget nunc leo. Vestibulum dolor orci, sollicitudin sed ornare sed, fringilla quis libero. Nullam tincidunt convallis suscipit. Sed quis justo non lectus auctor iaculis a non ante. In in libero sed nibh luctus ultrices ac eget velit. Duis quis quam arcu. Duis ut dolor at ipsum mattis luctus ut sit amet libero. Aliquam tortor augue, sollicitudin at ante et, tempus dignissim arcu. Maecenas eu malesuada metus. Quisque dui ex, pretium vel felis vitae, mattis sagittis libero. Aliquam eu sem eget ante dignissim bibendum.\nEtiam pretium, augue sed luctus venenatis, mi mi iaculis elit, sed malesuada mauris urna in sem. Donec vestibulum nulla a fermentum sollicitudin. Donec id posuere ipsum. Integer eu dolor sit amet turpis dapibus viverra vitae fringilla tortor. Etiam gravida dignissim augue. Sed ac lacinia diam, vitae ultricies sem. Pellentesque et ipsum condimentum, scelerisque tortor vitae, scelerisque magna. In molestie elit vel aliquet finibus. Nullam dignissim aliquet porttitor. Mauris in enim ornare, ullamcorper lorem non, imperdiet metus.',
                  },
              ];
              
          

    let dicionarios: Dicionario[] = [
      {
          id: 1,
        codigo: 1,
        nome: 'Dicionário teste',
        corTitulo: '#FF1493',
        corBotao: '#FF1493',
        corBotaoFonte: '#FFFFFF',
        corIcone: '#FF1493',
        palavras: [],
      
      },
      { id: 2,
        codigo: 2,
        nome: 'Teste2',
        corTitulo: '#00CC00',
        corBotao: '#FFFFFF',
        corBotaoFonte: '#000000',
        corIcone: '#FFFFFF',
        palavras: [],
      },
      {
        id: 3,
        codigo: 3,
        nome: 'Teste3',
        corTitulo: '#00CC00',
        corBotao: '#FFFFFF',
        corBotaoFonte: '#000000',
        corIcone: '#FFFFFF',
        palavras: [],
        
      }
    ];
    return { dicionarios, palavras};
  }
}
