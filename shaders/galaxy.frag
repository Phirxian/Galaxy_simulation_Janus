#version 430
precision mediump float;

in float v_mass;
in float v_brightness;

out vec4 frag_color;

void main()
{
  float c = v_brightness / 5.;

  if(v_mass < 0.0)
  {
      frag_color = vec4(c, .0, c, 1.);
  }
  else
  {
      frag_color = vec4(0, c, 0., 1.);
  }
}
