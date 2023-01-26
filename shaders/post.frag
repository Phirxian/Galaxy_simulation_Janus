#version 430
precision mediump float;

in vec2 v_texcoord;

out vec4 frag_color;

uniform int u_color_type;
uniform sampler2D u_galaxy;
uniform sampler2D u_blur;

void main()
{
	vec4 stars = texture2D(u_galaxy, v_texcoord);
	vec4 glow = texture2D(u_blur, v_texcoord) * 0.2;
    frag_color = 0.05 * (stars + glow);
}
